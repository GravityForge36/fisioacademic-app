import os

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
html_path = os.path.join(project_dir, "app_source.html")

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

target = """    </button>
  </div>
</div>
</div>
</aside>"""

# Let's replace the last </div> before </aside> with version info
new_content = content.replace(
    '      </div>\n    </div>\n  </div>\n</aside>',
    '      </div>\n      <div style="font-size: 0.65rem; color: rgba(255,255,255,0.25); text-align: center; margin-top: 8px; font-family: monospace;" id="sidebar-app-version">Versão 33</div>\n    </div>\n  </div>\n</aside>'
)

if new_content == content:
    print("Could not replace using exact spacing, trying general replace...")
    # Try with normal spacing
    new_content = content.replace(
        '</div>\n  </div>\n</div>\n</aside>',
        '</div>\n      <div style="font-size: 0.65rem; color: rgba(255,255,255,0.25); text-align: center; margin-top: 8px; font-family: monospace;" id="sidebar-app-version">Versão 33</div>\n  </div>\n</div>\n</aside>'
    )

with open(html_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Replacement complete.")

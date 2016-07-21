SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "jspm-tutorial/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "jspm-tutorial": {
      "main": "jspm-tutorial.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "angular": "github:angular/bower-angular@1.5.7",
    "angular-material": "github:angular/bower-material@1.0.9"
  },
  packages: {
    "github:angular/bower-material@1.0.9": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.7",
        "css": "github:systemjs/plugin-css@0.1.23",
        "angular-aria": "github:angular/bower-angular-aria@1.5.7",
        "angular-animate": "github:angular/bower-angular-animate@1.5.7"
      }
    },
    "github:angular/bower-angular-aria@1.5.7": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.7"
      }
    },
    "github:angular/bower-angular-animate@1.5.7": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.7"
      }
    }
  }
});

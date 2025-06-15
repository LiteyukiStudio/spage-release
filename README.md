# spage-release
Create site release on spage with GitHub Actions

## Usage

```yaml
      # build steps

      - name: Publish to spage
        uses: LiteyukiStudio/spage-release@v1
        with:
          url: https://dash.apage.dev
          dist: ./dist
          site-id: 145
          tag: latest
          is-temp: false
```
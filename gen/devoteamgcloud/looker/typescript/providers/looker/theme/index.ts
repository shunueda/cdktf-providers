// https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThemeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of theme. Can only be alphanumeric and underscores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#name Theme#name}
  */
  readonly name: string;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#settings Theme#settings}
  */
  readonly settings: ThemeSettings[] | cdktf.IResolvable;
}
export interface ThemeSettings {
  /**
  * Default background color
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#background_color Theme#background_color}
  */
  readonly backgroundColor: string;
  /**
  * Base font size for scaling fonts (only supported by legacy dashboards)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#base_font_size Theme#base_font_size}
  */
  readonly baseFontSize?: string;
  /**
  * The border radius for tiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#border_radius Theme#border_radius}
  */
  readonly borderRadius?: string;
  /**
  * Default box shadow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#box_shadow Theme#box_shadow}
  */
  readonly boxShadow?: string;
  /**
  * Toggle to center the dashboard title. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#center_dashboard_title Theme#center_dashboard_title}
  */
  readonly centerDashboardTitle?: boolean | cdktf.IResolvable;
  /**
  * Optional. ID of color collection to use with the theme. Use an empty string for none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#color_collection_id Theme#color_collection_id}
  */
  readonly colorCollectionId?: string;
  /**
  * The vertical gap/gutter size between tiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#column_gap_size Theme#column_gap_size}
  */
  readonly columnGapSize?: string;
  /**
  * Dashboard title font size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#dashboard_title_font_size Theme#dashboard_title_font_size}
  */
  readonly dashboardTitleFontSize?: string;
  /**
  * Default font color
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#font_color Theme#font_color}
  */
  readonly fontColor: string;
  /**
  * Primary font family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#font_family Theme#font_family}
  */
  readonly fontFamily: string;
  /**
  * Source specification for font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#font_source Theme#font_source}
  */
  readonly fontSource?: string;
  /**
  * Dashboard page margin bottom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#page_margin_bottom Theme#page_margin_bottom}
  */
  readonly pageMarginBottom?: string;
  /**
  * Dashboard page margin left and right.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#page_margin_sides Theme#page_margin_sides}
  */
  readonly pageMarginSides?: string;
  /**
  * Dashboard page margin top.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#page_margin_top Theme#page_margin_top}
  */
  readonly pageMarginTop?: string;
  /**
  * Primary button color
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#primary_button_color Theme#primary_button_color}
  */
  readonly primaryButtonColor?: string;
  /**
  * The horizontal gap/gutter size between tiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#row_gap_size Theme#row_gap_size}
  */
  readonly rowGapSize?: string;
  /**
  * Toggle to show the dashboard header. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#show_dashboard_header Theme#show_dashboard_header}
  */
  readonly showDashboardHeader?: boolean | cdktf.IResolvable;
  /**
  * Toggle to show the dashboard actions menu. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#show_dashboard_menu Theme#show_dashboard_menu}
  */
  readonly showDashboardMenu?: boolean | cdktf.IResolvable;
  /**
  * Toggle to show the explore page actions button. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#show_explore_actions_button Theme#show_explore_actions_button}
  */
  readonly showExploreActionsButton?: boolean | cdktf.IResolvable;
  /**
  * Toggle to show the explore page header. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#show_explore_header Theme#show_explore_header}
  */
  readonly showExploreHeader?: boolean | cdktf.IResolvable;
  /**
  * Toggle to show the explore page last run. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#show_explore_last_run Theme#show_explore_last_run}
  */
  readonly showExploreLastRun?: boolean | cdktf.IResolvable;
  /**
  * Toggle to show the explore page run button. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#show_explore_run_stop_button Theme#show_explore_run_stop_button}
  */
  readonly showExploreRunStopButton?: boolean | cdktf.IResolvable;
  /**
  * Toggle to show the explore page timezone. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#show_explore_timezone Theme#show_explore_timezone}
  */
  readonly showExploreTimezone?: boolean | cdktf.IResolvable;
  /**
  * Toggle to show the explore page title. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#show_explore_title Theme#show_explore_title}
  */
  readonly showExploreTitle?: boolean | cdktf.IResolvable;
  /**
  * Toggle to show filters. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#show_filters_bar Theme#show_filters_bar}
  */
  readonly showFiltersBar?: boolean | cdktf.IResolvable;
  /**
  * Toggle to show the filters icon/toggle. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#show_filters_toggle Theme#show_filters_toggle}
  */
  readonly showFiltersToggle?: boolean | cdktf.IResolvable;
  /**
  * Toggle to show the dashboard last updated indicator. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#show_last_updated_indicator Theme#show_last_updated_indicator}
  */
  readonly showLastUpdatedIndicator?: boolean | cdktf.IResolvable;
  /**
  * Toggle to show the look page actions button. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#show_look_actions_button Theme#show_look_actions_button}
  */
  readonly showLookActionsButton?: boolean | cdktf.IResolvable;
  /**
  * Toggle to show the look page header. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#show_look_header Theme#show_look_header}
  */
  readonly showLookHeader?: boolean | cdktf.IResolvable;
  /**
  * Toggle to show the look page last run. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#show_look_last_run Theme#show_look_last_run}
  */
  readonly showLookLastRun?: boolean | cdktf.IResolvable;
  /**
  * Toggle to show the look page run button. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#show_look_run_stop_button Theme#show_look_run_stop_button}
  */
  readonly showLookRunStopButton?: boolean | cdktf.IResolvable;
  /**
  * Toggle to show the look page timezone Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#show_look_timezone Theme#show_look_timezone}
  */
  readonly showLookTimezone?: boolean | cdktf.IResolvable;
  /**
  * Toggle to show the look page title. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#show_look_title Theme#show_look_title}
  */
  readonly showLookTitle?: boolean | cdktf.IResolvable;
  /**
  * Toggle to show reload data icon/button. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#show_reload_data_icon Theme#show_reload_data_icon}
  */
  readonly showReloadDataIcon?: boolean | cdktf.IResolvable;
  /**
  * Toggle to show the title. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#show_title Theme#show_title}
  */
  readonly showTitle?: boolean | cdktf.IResolvable;
  /**
  * Background color for text tiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#text_tile_background_color Theme#text_tile_background_color}
  */
  readonly textTileBackgroundColor?: string;
  /**
  * Text color for text tiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#text_tile_text_color Theme#text_tile_text_color}
  */
  readonly textTileTextColor?: string;
  /**
  * Background color for tiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#tile_background_color Theme#tile_background_color}
  */
  readonly tileBackgroundColor: string;
  /**
  * Toggles the tile shadow (not supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#tile_shadow Theme#tile_shadow}
  */
  readonly tileShadow?: boolean | cdktf.IResolvable;
  /**
  * Text color for tiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#tile_text_color Theme#tile_text_color}
  */
  readonly tileTextColor: string;
  /**
  * The text alignment of tile titles (New Dashboards)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#tile_title_alignment Theme#tile_title_alignment}
  */
  readonly tileTitleAlignment: string;
  /**
  * Font size for tiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#tile_title_font_size Theme#tile_title_font_size}
  */
  readonly tileTitleFontSize?: string;
  /**
  * Color for titles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#title_color Theme#title_color}
  */
  readonly titleColor: string;
}

export function themeSettingsToTerraform(struct?: ThemeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    base_font_size: cdktf.stringToTerraform(struct!.baseFontSize),
    border_radius: cdktf.stringToTerraform(struct!.borderRadius),
    box_shadow: cdktf.stringToTerraform(struct!.boxShadow),
    center_dashboard_title: cdktf.booleanToTerraform(struct!.centerDashboardTitle),
    color_collection_id: cdktf.stringToTerraform(struct!.colorCollectionId),
    column_gap_size: cdktf.stringToTerraform(struct!.columnGapSize),
    dashboard_title_font_size: cdktf.stringToTerraform(struct!.dashboardTitleFontSize),
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_family: cdktf.stringToTerraform(struct!.fontFamily),
    font_source: cdktf.stringToTerraform(struct!.fontSource),
    page_margin_bottom: cdktf.stringToTerraform(struct!.pageMarginBottom),
    page_margin_sides: cdktf.stringToTerraform(struct!.pageMarginSides),
    page_margin_top: cdktf.stringToTerraform(struct!.pageMarginTop),
    primary_button_color: cdktf.stringToTerraform(struct!.primaryButtonColor),
    row_gap_size: cdktf.stringToTerraform(struct!.rowGapSize),
    show_dashboard_header: cdktf.booleanToTerraform(struct!.showDashboardHeader),
    show_dashboard_menu: cdktf.booleanToTerraform(struct!.showDashboardMenu),
    show_explore_actions_button: cdktf.booleanToTerraform(struct!.showExploreActionsButton),
    show_explore_header: cdktf.booleanToTerraform(struct!.showExploreHeader),
    show_explore_last_run: cdktf.booleanToTerraform(struct!.showExploreLastRun),
    show_explore_run_stop_button: cdktf.booleanToTerraform(struct!.showExploreRunStopButton),
    show_explore_timezone: cdktf.booleanToTerraform(struct!.showExploreTimezone),
    show_explore_title: cdktf.booleanToTerraform(struct!.showExploreTitle),
    show_filters_bar: cdktf.booleanToTerraform(struct!.showFiltersBar),
    show_filters_toggle: cdktf.booleanToTerraform(struct!.showFiltersToggle),
    show_last_updated_indicator: cdktf.booleanToTerraform(struct!.showLastUpdatedIndicator),
    show_look_actions_button: cdktf.booleanToTerraform(struct!.showLookActionsButton),
    show_look_header: cdktf.booleanToTerraform(struct!.showLookHeader),
    show_look_last_run: cdktf.booleanToTerraform(struct!.showLookLastRun),
    show_look_run_stop_button: cdktf.booleanToTerraform(struct!.showLookRunStopButton),
    show_look_timezone: cdktf.booleanToTerraform(struct!.showLookTimezone),
    show_look_title: cdktf.booleanToTerraform(struct!.showLookTitle),
    show_reload_data_icon: cdktf.booleanToTerraform(struct!.showReloadDataIcon),
    show_title: cdktf.booleanToTerraform(struct!.showTitle),
    text_tile_background_color: cdktf.stringToTerraform(struct!.textTileBackgroundColor),
    text_tile_text_color: cdktf.stringToTerraform(struct!.textTileTextColor),
    tile_background_color: cdktf.stringToTerraform(struct!.tileBackgroundColor),
    tile_shadow: cdktf.booleanToTerraform(struct!.tileShadow),
    tile_text_color: cdktf.stringToTerraform(struct!.tileTextColor),
    tile_title_alignment: cdktf.stringToTerraform(struct!.tileTitleAlignment),
    tile_title_font_size: cdktf.stringToTerraform(struct!.tileTitleFontSize),
    title_color: cdktf.stringToTerraform(struct!.titleColor),
  }
}


export function themeSettingsToHclTerraform(struct?: ThemeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_font_size: {
      value: cdktf.stringToHclTerraform(struct!.baseFontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    border_radius: {
      value: cdktf.stringToHclTerraform(struct!.borderRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    box_shadow: {
      value: cdktf.stringToHclTerraform(struct!.boxShadow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    center_dashboard_title: {
      value: cdktf.booleanToHclTerraform(struct!.centerDashboardTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    color_collection_id: {
      value: cdktf.stringToHclTerraform(struct!.colorCollectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_gap_size: {
      value: cdktf.stringToHclTerraform(struct!.columnGapSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dashboard_title_font_size: {
      value: cdktf.stringToHclTerraform(struct!.dashboardTitleFontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_color: {
      value: cdktf.stringToHclTerraform(struct!.fontColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_family: {
      value: cdktf.stringToHclTerraform(struct!.fontFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_source: {
      value: cdktf.stringToHclTerraform(struct!.fontSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    page_margin_bottom: {
      value: cdktf.stringToHclTerraform(struct!.pageMarginBottom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    page_margin_sides: {
      value: cdktf.stringToHclTerraform(struct!.pageMarginSides),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    page_margin_top: {
      value: cdktf.stringToHclTerraform(struct!.pageMarginTop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_button_color: {
      value: cdktf.stringToHclTerraform(struct!.primaryButtonColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row_gap_size: {
      value: cdktf.stringToHclTerraform(struct!.rowGapSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_dashboard_header: {
      value: cdktf.booleanToHclTerraform(struct!.showDashboardHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_dashboard_menu: {
      value: cdktf.booleanToHclTerraform(struct!.showDashboardMenu),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_explore_actions_button: {
      value: cdktf.booleanToHclTerraform(struct!.showExploreActionsButton),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_explore_header: {
      value: cdktf.booleanToHclTerraform(struct!.showExploreHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_explore_last_run: {
      value: cdktf.booleanToHclTerraform(struct!.showExploreLastRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_explore_run_stop_button: {
      value: cdktf.booleanToHclTerraform(struct!.showExploreRunStopButton),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_explore_timezone: {
      value: cdktf.booleanToHclTerraform(struct!.showExploreTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_explore_title: {
      value: cdktf.booleanToHclTerraform(struct!.showExploreTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_filters_bar: {
      value: cdktf.booleanToHclTerraform(struct!.showFiltersBar),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_filters_toggle: {
      value: cdktf.booleanToHclTerraform(struct!.showFiltersToggle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_last_updated_indicator: {
      value: cdktf.booleanToHclTerraform(struct!.showLastUpdatedIndicator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_look_actions_button: {
      value: cdktf.booleanToHclTerraform(struct!.showLookActionsButton),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_look_header: {
      value: cdktf.booleanToHclTerraform(struct!.showLookHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_look_last_run: {
      value: cdktf.booleanToHclTerraform(struct!.showLookLastRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_look_run_stop_button: {
      value: cdktf.booleanToHclTerraform(struct!.showLookRunStopButton),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_look_timezone: {
      value: cdktf.booleanToHclTerraform(struct!.showLookTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_look_title: {
      value: cdktf.booleanToHclTerraform(struct!.showLookTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_reload_data_icon: {
      value: cdktf.booleanToHclTerraform(struct!.showReloadDataIcon),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_title: {
      value: cdktf.booleanToHclTerraform(struct!.showTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text_tile_background_color: {
      value: cdktf.stringToHclTerraform(struct!.textTileBackgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_tile_text_color: {
      value: cdktf.stringToHclTerraform(struct!.textTileTextColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tile_background_color: {
      value: cdktf.stringToHclTerraform(struct!.tileBackgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tile_shadow: {
      value: cdktf.booleanToHclTerraform(struct!.tileShadow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tile_text_color: {
      value: cdktf.stringToHclTerraform(struct!.tileTextColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tile_title_alignment: {
      value: cdktf.stringToHclTerraform(struct!.tileTitleAlignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tile_title_font_size: {
      value: cdktf.stringToHclTerraform(struct!.tileTitleFontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title_color: {
      value: cdktf.stringToHclTerraform(struct!.titleColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThemeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ThemeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._baseFontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseFontSize = this._baseFontSize;
    }
    if (this._borderRadius !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderRadius = this._borderRadius;
    }
    if (this._boxShadow !== undefined) {
      hasAnyValues = true;
      internalValueResult.boxShadow = this._boxShadow;
    }
    if (this._centerDashboardTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.centerDashboardTitle = this._centerDashboardTitle;
    }
    if (this._colorCollectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorCollectionId = this._colorCollectionId;
    }
    if (this._columnGapSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnGapSize = this._columnGapSize;
    }
    if (this._dashboardTitleFontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardTitleFontSize = this._dashboardTitleFontSize;
    }
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontFamily = this._fontFamily;
    }
    if (this._fontSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSource = this._fontSource;
    }
    if (this._pageMarginBottom !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageMarginBottom = this._pageMarginBottom;
    }
    if (this._pageMarginSides !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageMarginSides = this._pageMarginSides;
    }
    if (this._pageMarginTop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageMarginTop = this._pageMarginTop;
    }
    if (this._primaryButtonColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryButtonColor = this._primaryButtonColor;
    }
    if (this._rowGapSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowGapSize = this._rowGapSize;
    }
    if (this._showDashboardHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDashboardHeader = this._showDashboardHeader;
    }
    if (this._showDashboardMenu !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDashboardMenu = this._showDashboardMenu;
    }
    if (this._showExploreActionsButton !== undefined) {
      hasAnyValues = true;
      internalValueResult.showExploreActionsButton = this._showExploreActionsButton;
    }
    if (this._showExploreHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.showExploreHeader = this._showExploreHeader;
    }
    if (this._showExploreLastRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.showExploreLastRun = this._showExploreLastRun;
    }
    if (this._showExploreRunStopButton !== undefined) {
      hasAnyValues = true;
      internalValueResult.showExploreRunStopButton = this._showExploreRunStopButton;
    }
    if (this._showExploreTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.showExploreTimezone = this._showExploreTimezone;
    }
    if (this._showExploreTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.showExploreTitle = this._showExploreTitle;
    }
    if (this._showFiltersBar !== undefined) {
      hasAnyValues = true;
      internalValueResult.showFiltersBar = this._showFiltersBar;
    }
    if (this._showFiltersToggle !== undefined) {
      hasAnyValues = true;
      internalValueResult.showFiltersToggle = this._showFiltersToggle;
    }
    if (this._showLastUpdatedIndicator !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLastUpdatedIndicator = this._showLastUpdatedIndicator;
    }
    if (this._showLookActionsButton !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLookActionsButton = this._showLookActionsButton;
    }
    if (this._showLookHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLookHeader = this._showLookHeader;
    }
    if (this._showLookLastRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLookLastRun = this._showLookLastRun;
    }
    if (this._showLookRunStopButton !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLookRunStopButton = this._showLookRunStopButton;
    }
    if (this._showLookTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLookTimezone = this._showLookTimezone;
    }
    if (this._showLookTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLookTitle = this._showLookTitle;
    }
    if (this._showReloadDataIcon !== undefined) {
      hasAnyValues = true;
      internalValueResult.showReloadDataIcon = this._showReloadDataIcon;
    }
    if (this._showTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.showTitle = this._showTitle;
    }
    if (this._textTileBackgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTileBackgroundColor = this._textTileBackgroundColor;
    }
    if (this._textTileTextColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTileTextColor = this._textTileTextColor;
    }
    if (this._tileBackgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.tileBackgroundColor = this._tileBackgroundColor;
    }
    if (this._tileShadow !== undefined) {
      hasAnyValues = true;
      internalValueResult.tileShadow = this._tileShadow;
    }
    if (this._tileTextColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.tileTextColor = this._tileTextColor;
    }
    if (this._tileTitleAlignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.tileTitleAlignment = this._tileTitleAlignment;
    }
    if (this._tileTitleFontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tileTitleFontSize = this._tileTitleFontSize;
    }
    if (this._titleColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleColor = this._titleColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThemeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backgroundColor = undefined;
      this._baseFontSize = undefined;
      this._borderRadius = undefined;
      this._boxShadow = undefined;
      this._centerDashboardTitle = undefined;
      this._colorCollectionId = undefined;
      this._columnGapSize = undefined;
      this._dashboardTitleFontSize = undefined;
      this._fontColor = undefined;
      this._fontFamily = undefined;
      this._fontSource = undefined;
      this._pageMarginBottom = undefined;
      this._pageMarginSides = undefined;
      this._pageMarginTop = undefined;
      this._primaryButtonColor = undefined;
      this._rowGapSize = undefined;
      this._showDashboardHeader = undefined;
      this._showDashboardMenu = undefined;
      this._showExploreActionsButton = undefined;
      this._showExploreHeader = undefined;
      this._showExploreLastRun = undefined;
      this._showExploreRunStopButton = undefined;
      this._showExploreTimezone = undefined;
      this._showExploreTitle = undefined;
      this._showFiltersBar = undefined;
      this._showFiltersToggle = undefined;
      this._showLastUpdatedIndicator = undefined;
      this._showLookActionsButton = undefined;
      this._showLookHeader = undefined;
      this._showLookLastRun = undefined;
      this._showLookRunStopButton = undefined;
      this._showLookTimezone = undefined;
      this._showLookTitle = undefined;
      this._showReloadDataIcon = undefined;
      this._showTitle = undefined;
      this._textTileBackgroundColor = undefined;
      this._textTileTextColor = undefined;
      this._tileBackgroundColor = undefined;
      this._tileShadow = undefined;
      this._tileTextColor = undefined;
      this._tileTitleAlignment = undefined;
      this._tileTitleFontSize = undefined;
      this._titleColor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backgroundColor = value.backgroundColor;
      this._baseFontSize = value.baseFontSize;
      this._borderRadius = value.borderRadius;
      this._boxShadow = value.boxShadow;
      this._centerDashboardTitle = value.centerDashboardTitle;
      this._colorCollectionId = value.colorCollectionId;
      this._columnGapSize = value.columnGapSize;
      this._dashboardTitleFontSize = value.dashboardTitleFontSize;
      this._fontColor = value.fontColor;
      this._fontFamily = value.fontFamily;
      this._fontSource = value.fontSource;
      this._pageMarginBottom = value.pageMarginBottom;
      this._pageMarginSides = value.pageMarginSides;
      this._pageMarginTop = value.pageMarginTop;
      this._primaryButtonColor = value.primaryButtonColor;
      this._rowGapSize = value.rowGapSize;
      this._showDashboardHeader = value.showDashboardHeader;
      this._showDashboardMenu = value.showDashboardMenu;
      this._showExploreActionsButton = value.showExploreActionsButton;
      this._showExploreHeader = value.showExploreHeader;
      this._showExploreLastRun = value.showExploreLastRun;
      this._showExploreRunStopButton = value.showExploreRunStopButton;
      this._showExploreTimezone = value.showExploreTimezone;
      this._showExploreTitle = value.showExploreTitle;
      this._showFiltersBar = value.showFiltersBar;
      this._showFiltersToggle = value.showFiltersToggle;
      this._showLastUpdatedIndicator = value.showLastUpdatedIndicator;
      this._showLookActionsButton = value.showLookActionsButton;
      this._showLookHeader = value.showLookHeader;
      this._showLookLastRun = value.showLookLastRun;
      this._showLookRunStopButton = value.showLookRunStopButton;
      this._showLookTimezone = value.showLookTimezone;
      this._showLookTitle = value.showLookTitle;
      this._showReloadDataIcon = value.showReloadDataIcon;
      this._showTitle = value.showTitle;
      this._textTileBackgroundColor = value.textTileBackgroundColor;
      this._textTileTextColor = value.textTileTextColor;
      this._tileBackgroundColor = value.tileBackgroundColor;
      this._tileShadow = value.tileShadow;
      this._tileTextColor = value.tileTextColor;
      this._tileTitleAlignment = value.tileTitleAlignment;
      this._tileTitleFontSize = value.tileTitleFontSize;
      this._titleColor = value.titleColor;
    }
  }

  // background_color - computed: false, optional: false, required: true
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // base_font_size - computed: false, optional: true, required: false
  private _baseFontSize?: string; 
  public get baseFontSize() {
    return this.getStringAttribute('base_font_size');
  }
  public set baseFontSize(value: string) {
    this._baseFontSize = value;
  }
  public resetBaseFontSize() {
    this._baseFontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseFontSizeInput() {
    return this._baseFontSize;
  }

  // border_radius - computed: false, optional: true, required: false
  private _borderRadius?: string; 
  public get borderRadius() {
    return this.getStringAttribute('border_radius');
  }
  public set borderRadius(value: string) {
    this._borderRadius = value;
  }
  public resetBorderRadius() {
    this._borderRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderRadiusInput() {
    return this._borderRadius;
  }

  // box_shadow - computed: false, optional: true, required: false
  private _boxShadow?: string; 
  public get boxShadow() {
    return this.getStringAttribute('box_shadow');
  }
  public set boxShadow(value: string) {
    this._boxShadow = value;
  }
  public resetBoxShadow() {
    this._boxShadow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boxShadowInput() {
    return this._boxShadow;
  }

  // center_dashboard_title - computed: false, optional: true, required: false
  private _centerDashboardTitle?: boolean | cdktf.IResolvable; 
  public get centerDashboardTitle() {
    return this.getBooleanAttribute('center_dashboard_title');
  }
  public set centerDashboardTitle(value: boolean | cdktf.IResolvable) {
    this._centerDashboardTitle = value;
  }
  public resetCenterDashboardTitle() {
    this._centerDashboardTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centerDashboardTitleInput() {
    return this._centerDashboardTitle;
  }

  // color_collection_id - computed: false, optional: true, required: false
  private _colorCollectionId?: string; 
  public get colorCollectionId() {
    return this.getStringAttribute('color_collection_id');
  }
  public set colorCollectionId(value: string) {
    this._colorCollectionId = value;
  }
  public resetColorCollectionId() {
    this._colorCollectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorCollectionIdInput() {
    return this._colorCollectionId;
  }

  // column_gap_size - computed: false, optional: true, required: false
  private _columnGapSize?: string; 
  public get columnGapSize() {
    return this.getStringAttribute('column_gap_size');
  }
  public set columnGapSize(value: string) {
    this._columnGapSize = value;
  }
  public resetColumnGapSize() {
    this._columnGapSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnGapSizeInput() {
    return this._columnGapSize;
  }

  // dashboard_title_font_size - computed: false, optional: true, required: false
  private _dashboardTitleFontSize?: string; 
  public get dashboardTitleFontSize() {
    return this.getStringAttribute('dashboard_title_font_size');
  }
  public set dashboardTitleFontSize(value: string) {
    this._dashboardTitleFontSize = value;
  }
  public resetDashboardTitleFontSize() {
    this._dashboardTitleFontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardTitleFontSizeInput() {
    return this._dashboardTitleFontSize;
  }

  // font_color - computed: false, optional: false, required: true
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_family - computed: false, optional: false, required: true
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_source - computed: false, optional: true, required: false
  private _fontSource?: string; 
  public get fontSource() {
    return this.getStringAttribute('font_source');
  }
  public set fontSource(value: string) {
    this._fontSource = value;
  }
  public resetFontSource() {
    this._fontSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSourceInput() {
    return this._fontSource;
  }

  // page_margin_bottom - computed: false, optional: true, required: false
  private _pageMarginBottom?: string; 
  public get pageMarginBottom() {
    return this.getStringAttribute('page_margin_bottom');
  }
  public set pageMarginBottom(value: string) {
    this._pageMarginBottom = value;
  }
  public resetPageMarginBottom() {
    this._pageMarginBottom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageMarginBottomInput() {
    return this._pageMarginBottom;
  }

  // page_margin_sides - computed: false, optional: true, required: false
  private _pageMarginSides?: string; 
  public get pageMarginSides() {
    return this.getStringAttribute('page_margin_sides');
  }
  public set pageMarginSides(value: string) {
    this._pageMarginSides = value;
  }
  public resetPageMarginSides() {
    this._pageMarginSides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageMarginSidesInput() {
    return this._pageMarginSides;
  }

  // page_margin_top - computed: false, optional: true, required: false
  private _pageMarginTop?: string; 
  public get pageMarginTop() {
    return this.getStringAttribute('page_margin_top');
  }
  public set pageMarginTop(value: string) {
    this._pageMarginTop = value;
  }
  public resetPageMarginTop() {
    this._pageMarginTop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageMarginTopInput() {
    return this._pageMarginTop;
  }

  // primary_button_color - computed: false, optional: true, required: false
  private _primaryButtonColor?: string; 
  public get primaryButtonColor() {
    return this.getStringAttribute('primary_button_color');
  }
  public set primaryButtonColor(value: string) {
    this._primaryButtonColor = value;
  }
  public resetPrimaryButtonColor() {
    this._primaryButtonColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryButtonColorInput() {
    return this._primaryButtonColor;
  }

  // row_gap_size - computed: false, optional: true, required: false
  private _rowGapSize?: string; 
  public get rowGapSize() {
    return this.getStringAttribute('row_gap_size');
  }
  public set rowGapSize(value: string) {
    this._rowGapSize = value;
  }
  public resetRowGapSize() {
    this._rowGapSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowGapSizeInput() {
    return this._rowGapSize;
  }

  // show_dashboard_header - computed: false, optional: true, required: false
  private _showDashboardHeader?: boolean | cdktf.IResolvable; 
  public get showDashboardHeader() {
    return this.getBooleanAttribute('show_dashboard_header');
  }
  public set showDashboardHeader(value: boolean | cdktf.IResolvable) {
    this._showDashboardHeader = value;
  }
  public resetShowDashboardHeader() {
    this._showDashboardHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDashboardHeaderInput() {
    return this._showDashboardHeader;
  }

  // show_dashboard_menu - computed: false, optional: true, required: false
  private _showDashboardMenu?: boolean | cdktf.IResolvable; 
  public get showDashboardMenu() {
    return this.getBooleanAttribute('show_dashboard_menu');
  }
  public set showDashboardMenu(value: boolean | cdktf.IResolvable) {
    this._showDashboardMenu = value;
  }
  public resetShowDashboardMenu() {
    this._showDashboardMenu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDashboardMenuInput() {
    return this._showDashboardMenu;
  }

  // show_explore_actions_button - computed: false, optional: true, required: false
  private _showExploreActionsButton?: boolean | cdktf.IResolvable; 
  public get showExploreActionsButton() {
    return this.getBooleanAttribute('show_explore_actions_button');
  }
  public set showExploreActionsButton(value: boolean | cdktf.IResolvable) {
    this._showExploreActionsButton = value;
  }
  public resetShowExploreActionsButton() {
    this._showExploreActionsButton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showExploreActionsButtonInput() {
    return this._showExploreActionsButton;
  }

  // show_explore_header - computed: false, optional: true, required: false
  private _showExploreHeader?: boolean | cdktf.IResolvable; 
  public get showExploreHeader() {
    return this.getBooleanAttribute('show_explore_header');
  }
  public set showExploreHeader(value: boolean | cdktf.IResolvable) {
    this._showExploreHeader = value;
  }
  public resetShowExploreHeader() {
    this._showExploreHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showExploreHeaderInput() {
    return this._showExploreHeader;
  }

  // show_explore_last_run - computed: false, optional: true, required: false
  private _showExploreLastRun?: boolean | cdktf.IResolvable; 
  public get showExploreLastRun() {
    return this.getBooleanAttribute('show_explore_last_run');
  }
  public set showExploreLastRun(value: boolean | cdktf.IResolvable) {
    this._showExploreLastRun = value;
  }
  public resetShowExploreLastRun() {
    this._showExploreLastRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showExploreLastRunInput() {
    return this._showExploreLastRun;
  }

  // show_explore_run_stop_button - computed: false, optional: true, required: false
  private _showExploreRunStopButton?: boolean | cdktf.IResolvable; 
  public get showExploreRunStopButton() {
    return this.getBooleanAttribute('show_explore_run_stop_button');
  }
  public set showExploreRunStopButton(value: boolean | cdktf.IResolvable) {
    this._showExploreRunStopButton = value;
  }
  public resetShowExploreRunStopButton() {
    this._showExploreRunStopButton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showExploreRunStopButtonInput() {
    return this._showExploreRunStopButton;
  }

  // show_explore_timezone - computed: false, optional: true, required: false
  private _showExploreTimezone?: boolean | cdktf.IResolvable; 
  public get showExploreTimezone() {
    return this.getBooleanAttribute('show_explore_timezone');
  }
  public set showExploreTimezone(value: boolean | cdktf.IResolvable) {
    this._showExploreTimezone = value;
  }
  public resetShowExploreTimezone() {
    this._showExploreTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showExploreTimezoneInput() {
    return this._showExploreTimezone;
  }

  // show_explore_title - computed: false, optional: true, required: false
  private _showExploreTitle?: boolean | cdktf.IResolvable; 
  public get showExploreTitle() {
    return this.getBooleanAttribute('show_explore_title');
  }
  public set showExploreTitle(value: boolean | cdktf.IResolvable) {
    this._showExploreTitle = value;
  }
  public resetShowExploreTitle() {
    this._showExploreTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showExploreTitleInput() {
    return this._showExploreTitle;
  }

  // show_filters_bar - computed: false, optional: true, required: false
  private _showFiltersBar?: boolean | cdktf.IResolvable; 
  public get showFiltersBar() {
    return this.getBooleanAttribute('show_filters_bar');
  }
  public set showFiltersBar(value: boolean | cdktf.IResolvable) {
    this._showFiltersBar = value;
  }
  public resetShowFiltersBar() {
    this._showFiltersBar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showFiltersBarInput() {
    return this._showFiltersBar;
  }

  // show_filters_toggle - computed: false, optional: true, required: false
  private _showFiltersToggle?: boolean | cdktf.IResolvable; 
  public get showFiltersToggle() {
    return this.getBooleanAttribute('show_filters_toggle');
  }
  public set showFiltersToggle(value: boolean | cdktf.IResolvable) {
    this._showFiltersToggle = value;
  }
  public resetShowFiltersToggle() {
    this._showFiltersToggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showFiltersToggleInput() {
    return this._showFiltersToggle;
  }

  // show_last_updated_indicator - computed: false, optional: true, required: false
  private _showLastUpdatedIndicator?: boolean | cdktf.IResolvable; 
  public get showLastUpdatedIndicator() {
    return this.getBooleanAttribute('show_last_updated_indicator');
  }
  public set showLastUpdatedIndicator(value: boolean | cdktf.IResolvable) {
    this._showLastUpdatedIndicator = value;
  }
  public resetShowLastUpdatedIndicator() {
    this._showLastUpdatedIndicator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLastUpdatedIndicatorInput() {
    return this._showLastUpdatedIndicator;
  }

  // show_look_actions_button - computed: false, optional: true, required: false
  private _showLookActionsButton?: boolean | cdktf.IResolvable; 
  public get showLookActionsButton() {
    return this.getBooleanAttribute('show_look_actions_button');
  }
  public set showLookActionsButton(value: boolean | cdktf.IResolvable) {
    this._showLookActionsButton = value;
  }
  public resetShowLookActionsButton() {
    this._showLookActionsButton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLookActionsButtonInput() {
    return this._showLookActionsButton;
  }

  // show_look_header - computed: false, optional: true, required: false
  private _showLookHeader?: boolean | cdktf.IResolvable; 
  public get showLookHeader() {
    return this.getBooleanAttribute('show_look_header');
  }
  public set showLookHeader(value: boolean | cdktf.IResolvable) {
    this._showLookHeader = value;
  }
  public resetShowLookHeader() {
    this._showLookHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLookHeaderInput() {
    return this._showLookHeader;
  }

  // show_look_last_run - computed: false, optional: true, required: false
  private _showLookLastRun?: boolean | cdktf.IResolvable; 
  public get showLookLastRun() {
    return this.getBooleanAttribute('show_look_last_run');
  }
  public set showLookLastRun(value: boolean | cdktf.IResolvable) {
    this._showLookLastRun = value;
  }
  public resetShowLookLastRun() {
    this._showLookLastRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLookLastRunInput() {
    return this._showLookLastRun;
  }

  // show_look_run_stop_button - computed: false, optional: true, required: false
  private _showLookRunStopButton?: boolean | cdktf.IResolvable; 
  public get showLookRunStopButton() {
    return this.getBooleanAttribute('show_look_run_stop_button');
  }
  public set showLookRunStopButton(value: boolean | cdktf.IResolvable) {
    this._showLookRunStopButton = value;
  }
  public resetShowLookRunStopButton() {
    this._showLookRunStopButton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLookRunStopButtonInput() {
    return this._showLookRunStopButton;
  }

  // show_look_timezone - computed: false, optional: true, required: false
  private _showLookTimezone?: boolean | cdktf.IResolvable; 
  public get showLookTimezone() {
    return this.getBooleanAttribute('show_look_timezone');
  }
  public set showLookTimezone(value: boolean | cdktf.IResolvable) {
    this._showLookTimezone = value;
  }
  public resetShowLookTimezone() {
    this._showLookTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLookTimezoneInput() {
    return this._showLookTimezone;
  }

  // show_look_title - computed: false, optional: true, required: false
  private _showLookTitle?: boolean | cdktf.IResolvable; 
  public get showLookTitle() {
    return this.getBooleanAttribute('show_look_title');
  }
  public set showLookTitle(value: boolean | cdktf.IResolvable) {
    this._showLookTitle = value;
  }
  public resetShowLookTitle() {
    this._showLookTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLookTitleInput() {
    return this._showLookTitle;
  }

  // show_reload_data_icon - computed: false, optional: true, required: false
  private _showReloadDataIcon?: boolean | cdktf.IResolvable; 
  public get showReloadDataIcon() {
    return this.getBooleanAttribute('show_reload_data_icon');
  }
  public set showReloadDataIcon(value: boolean | cdktf.IResolvable) {
    this._showReloadDataIcon = value;
  }
  public resetShowReloadDataIcon() {
    this._showReloadDataIcon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showReloadDataIconInput() {
    return this._showReloadDataIcon;
  }

  // show_title - computed: false, optional: true, required: false
  private _showTitle?: boolean | cdktf.IResolvable; 
  public get showTitle() {
    return this.getBooleanAttribute('show_title');
  }
  public set showTitle(value: boolean | cdktf.IResolvable) {
    this._showTitle = value;
  }
  public resetShowTitle() {
    this._showTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showTitleInput() {
    return this._showTitle;
  }

  // text_tile_background_color - computed: false, optional: true, required: false
  private _textTileBackgroundColor?: string; 
  public get textTileBackgroundColor() {
    return this.getStringAttribute('text_tile_background_color');
  }
  public set textTileBackgroundColor(value: string) {
    this._textTileBackgroundColor = value;
  }
  public resetTextTileBackgroundColor() {
    this._textTileBackgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textTileBackgroundColorInput() {
    return this._textTileBackgroundColor;
  }

  // text_tile_text_color - computed: false, optional: true, required: false
  private _textTileTextColor?: string; 
  public get textTileTextColor() {
    return this.getStringAttribute('text_tile_text_color');
  }
  public set textTileTextColor(value: string) {
    this._textTileTextColor = value;
  }
  public resetTextTileTextColor() {
    this._textTileTextColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textTileTextColorInput() {
    return this._textTileTextColor;
  }

  // tile_background_color - computed: false, optional: false, required: true
  private _tileBackgroundColor?: string; 
  public get tileBackgroundColor() {
    return this.getStringAttribute('tile_background_color');
  }
  public set tileBackgroundColor(value: string) {
    this._tileBackgroundColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tileBackgroundColorInput() {
    return this._tileBackgroundColor;
  }

  // tile_shadow - computed: false, optional: true, required: false
  private _tileShadow?: boolean | cdktf.IResolvable; 
  public get tileShadow() {
    return this.getBooleanAttribute('tile_shadow');
  }
  public set tileShadow(value: boolean | cdktf.IResolvable) {
    this._tileShadow = value;
  }
  public resetTileShadow() {
    this._tileShadow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tileShadowInput() {
    return this._tileShadow;
  }

  // tile_text_color - computed: false, optional: false, required: true
  private _tileTextColor?: string; 
  public get tileTextColor() {
    return this.getStringAttribute('tile_text_color');
  }
  public set tileTextColor(value: string) {
    this._tileTextColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tileTextColorInput() {
    return this._tileTextColor;
  }

  // tile_title_alignment - computed: false, optional: false, required: true
  private _tileTitleAlignment?: string; 
  public get tileTitleAlignment() {
    return this.getStringAttribute('tile_title_alignment');
  }
  public set tileTitleAlignment(value: string) {
    this._tileTitleAlignment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tileTitleAlignmentInput() {
    return this._tileTitleAlignment;
  }

  // tile_title_font_size - computed: false, optional: true, required: false
  private _tileTitleFontSize?: string; 
  public get tileTitleFontSize() {
    return this.getStringAttribute('tile_title_font_size');
  }
  public set tileTitleFontSize(value: string) {
    this._tileTitleFontSize = value;
  }
  public resetTileTitleFontSize() {
    this._tileTitleFontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tileTitleFontSizeInput() {
    return this._tileTitleFontSize;
  }

  // title_color - computed: false, optional: false, required: true
  private _titleColor?: string; 
  public get titleColor() {
    return this.getStringAttribute('title_color');
  }
  public set titleColor(value: string) {
    this._titleColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleColorInput() {
    return this._titleColor;
  }
}

export class ThemeSettingsList extends cdktf.ComplexList {
  public internalValue? : ThemeSettings[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ThemeSettingsOutputReference {
    return new ThemeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme looker_theme}
*/
export class Theme extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "looker_theme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Theme resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Theme to import
  * @param importFromId The id of the existing Theme that should be imported. Refer to the {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Theme to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "looker_theme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/theme looker_theme} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThemeConfig
  */
  public constructor(scope: Construct, id: string, config: ThemeConfig) {
    super(scope, id, {
      terraformResourceType: 'looker_theme',
      terraformGeneratorMetadata: {
        providerName: 'looker',
        providerVersion: '0.4.0',
        providerVersionConstraint: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new ThemeSettingsList(this, "settings", true);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: ThemeSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      settings: cdktf.listMapper(themeSettingsToTerraform, true)(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: cdktf.listMapperHcl(themeSettingsToHclTerraform, true)(this._settings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ThemeSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

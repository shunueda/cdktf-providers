// https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `id` property of a `coder_agent` resource to associate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app#agent_id App#agent_id}
  */
  readonly agentId: string;
  /**
  * A command to run in a terminal opening this app. In the web, this will open in a new tab. In the CLI, this will SSH and execute the command. Either `command` or `url` may be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app#command App#command}
  */
  readonly command?: string;
  /**
  * A display name to identify the app. Defaults to the slug.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app#display_name App#display_name}
  */
  readonly displayName?: string;
  /**
  * Specifies whether `url` is opened on the client machine instead of proxied through the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app#external App#external}
  */
  readonly external?: boolean | cdktf.IResolvable;
  /**
  * The name of a group that this app belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app#group App#group}
  */
  readonly group?: string;
  /**
  * Determines if the app is visible in the UI (minimum Coder version: v2.16).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app#hidden App#hidden}
  */
  readonly hidden?: boolean | cdktf.IResolvable;
  /**
  * A URL to an icon that will display in the dashboard. View built-in icons [here](https://github.com/coder/coder/tree/main/site/static/icon). Use a built-in icon with `"${data.coder_workspace.me.access_url}/icon/<path>"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app#icon App#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app#id App#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Determines where the app will be opened. Valid values are `"tab"` and `"slim-window" (default)`. `"tab"` opens in a new tab in the same browser window. `"slim-window"` opens a new browser window without navigation controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app#open_in App#open_in}
  */
  readonly openIn?: string;
  /**
  * The order determines the position of app in the UI presentation. The lowest order is shown first and apps with equal order are sorted by name (ascending order).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app#order App#order}
  */
  readonly order?: number;
  /**
  * Determines the level which the application is shared at. Valid levels are `"owner"` (default), `"authenticated"` and `"public"`. Level `"owner"` disables sharing on the app, so only the workspace owner can access it. Level `"authenticated"` shares the app with all authenticated users. Level `"public"` shares it with any user, including unauthenticated users. Permitted application sharing levels can be configured site-wide via a flag on `coder server` (Enterprise only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app#share App#share}
  */
  readonly share?: string;
  /**
  * A hostname-friendly name for the app. This is used in URLs to access the app. May contain alphanumerics and hyphens. Cannot start/end with a hyphen or contain two consecutive hyphens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app#slug App#slug}
  */
  readonly slug: string;
  /**
  * Determines whether the app will be accessed via it's own subdomain or whether it will be accessed via a path on Coder. If wildcards have not been setup by the administrator then apps with `subdomain` set to `true` will not be accessible. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app#subdomain App#subdomain}
  */
  readonly subdomain?: boolean | cdktf.IResolvable;
  /**
  * Markdown text that is displayed when hovering over workspace apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app#tooltip App#tooltip}
  */
  readonly tooltip?: string;
  /**
  * An external url if `external=true` or a URL to be proxied to from inside the workspace. This should be of the form `http://localhost:PORT[/SUBPATH]`. Either `command` or `url` may be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app#url App#url}
  */
  readonly url?: string;
  /**
  * healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app#healthcheck App#healthcheck}
  */
  readonly healthcheck?: AppHealthcheck;
}
export interface AppHealthcheck {
  /**
  * Duration in seconds to wait between healthcheck requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app#interval App#interval}
  */
  readonly interval: number;
  /**
  * Number of consecutive heathcheck failures before returning an unhealthy status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app#threshold App#threshold}
  */
  readonly threshold: number;
  /**
  * HTTP address used determine the application readiness. A successful health check is a HTTP response code less than 500 returned before `healthcheck.interval` seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app#url App#url}
  */
  readonly url: string;
}

export function appHealthcheckToTerraform(struct?: AppHealthcheckOutputReference | AppHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function appHealthcheckToHclTerraform(struct?: AppHealthcheckOutputReference | AppHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._threshold = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._threshold = value.threshold;
      this._url = value.url;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app coder_app}
*/
export class App extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coder_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a App resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the App to import
  * @param importFromId The id of the existing App that should be imported. Refer to the {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the App to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coder_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/app coder_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppConfig
  */
  public constructor(scope: Construct, id: string, config: AppConfig) {
    super(scope, id, {
      terraformResourceType: 'coder_app',
      terraformGeneratorMetadata: {
        providerName: 'coder',
        providerVersion: '2.13.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentId = config.agentId;
    this._command = config.command;
    this._displayName = config.displayName;
    this._external = config.external;
    this._group = config.group;
    this._hidden = config.hidden;
    this._icon = config.icon;
    this._id = config.id;
    this._openIn = config.openIn;
    this._order = config.order;
    this._share = config.share;
    this._slug = config.slug;
    this._subdomain = config.subdomain;
    this._tooltip = config.tooltip;
    this._url = config.url;
    this._healthcheck.internalValue = config.healthcheck;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // external - computed: false, optional: true, required: false
  private _external?: boolean | cdktf.IResolvable; 
  public get external() {
    return this.getBooleanAttribute('external');
  }
  public set external(value: boolean | cdktf.IResolvable) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // hidden - computed: false, optional: true, required: false
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // open_in - computed: false, optional: true, required: false
  private _openIn?: string; 
  public get openIn() {
    return this.getStringAttribute('open_in');
  }
  public set openIn(value: string) {
    this._openIn = value;
  }
  public resetOpenIn() {
    this._openIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openInInput() {
    return this._openIn;
  }

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // share - computed: false, optional: true, required: false
  private _share?: string; 
  public get share() {
    return this.getStringAttribute('share');
  }
  public set share(value: string) {
    this._share = value;
  }
  public resetShare() {
    this._share = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareInput() {
    return this._share;
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // subdomain - computed: false, optional: true, required: false
  private _subdomain?: boolean | cdktf.IResolvable; 
  public get subdomain() {
    return this.getBooleanAttribute('subdomain');
  }
  public set subdomain(value: boolean | cdktf.IResolvable) {
    this._subdomain = value;
  }
  public resetSubdomain() {
    this._subdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain;
  }

  // tooltip - computed: false, optional: true, required: false
  private _tooltip?: string; 
  public get tooltip() {
    return this.getStringAttribute('tooltip');
  }
  public set tooltip(value: string) {
    this._tooltip = value;
  }
  public resetTooltip() {
    this._tooltip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipInput() {
    return this._tooltip;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck = new AppHealthcheckOutputReference(this, "healthcheck");
  public get healthcheck() {
    return this._healthcheck;
  }
  public putHealthcheck(value: AppHealthcheck) {
    this._healthcheck.internalValue = value;
  }
  public resetHealthcheck() {
    this._healthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_id: cdktf.stringToTerraform(this._agentId),
      command: cdktf.stringToTerraform(this._command),
      display_name: cdktf.stringToTerraform(this._displayName),
      external: cdktf.booleanToTerraform(this._external),
      group: cdktf.stringToTerraform(this._group),
      hidden: cdktf.booleanToTerraform(this._hidden),
      icon: cdktf.stringToTerraform(this._icon),
      id: cdktf.stringToTerraform(this._id),
      open_in: cdktf.stringToTerraform(this._openIn),
      order: cdktf.numberToTerraform(this._order),
      share: cdktf.stringToTerraform(this._share),
      slug: cdktf.stringToTerraform(this._slug),
      subdomain: cdktf.booleanToTerraform(this._subdomain),
      tooltip: cdktf.stringToTerraform(this._tooltip),
      url: cdktf.stringToTerraform(this._url),
      healthcheck: appHealthcheckToTerraform(this._healthcheck.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command: {
        value: cdktf.stringToHclTerraform(this._command),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external: {
        value: cdktf.booleanToHclTerraform(this._external),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hidden: {
        value: cdktf.booleanToHclTerraform(this._hidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      open_in: {
        value: cdktf.stringToHclTerraform(this._openIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      share: {
        value: cdktf.stringToHclTerraform(this._share),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subdomain: {
        value: cdktf.booleanToHclTerraform(this._subdomain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tooltip: {
        value: cdktf.stringToHclTerraform(this._tooltip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      healthcheck: {
        value: appHealthcheckToHclTerraform(this._healthcheck.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppHealthcheckList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

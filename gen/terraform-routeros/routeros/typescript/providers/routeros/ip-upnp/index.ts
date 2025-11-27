// https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_upnp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpUpnpConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_upnp#___path___ IpUpnp#___path___}
  */
  readonly path?: string;
  /**
  * Whether or not should the users be allowed to disable the router's external interface. This functionality (for users to be able to turn the router's external interface off without any authentication procedure) is required by the standard, but as it is sometimes not expected or unwanted in UPnP deployments which the standard was not designed for (it was designed mostly for home users to establish their own local networks), you can disable this behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_upnp#allow_disable_external_interface IpUpnp#allow_disable_external_interface}
  */
  readonly allowDisableExternalInterface?: boolean | cdktf.IResolvable;
  /**
  * Enable UPnP service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_upnp#enabled IpUpnp#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_upnp#id IpUpnp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable a workaround for some broken implementations, which are handling the absence of UPnP rules incorrectly (for example, popping up error messages). This option will instruct the server to install a dummy (meaningless) UPnP rule that can be observed by the clients, which refuse to work correctly otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_upnp#show_dummy_rule IpUpnp#show_dummy_rule}
  */
  readonly showDummyRule?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_upnp routeros_ip_upnp}
*/
export class IpUpnp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_upnp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpUpnp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpUpnp to import
  * @param importFromId The id of the existing IpUpnp that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_upnp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpUpnp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_upnp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_upnp routeros_ip_upnp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpUpnpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpUpnpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_upnp',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.93.0',
        providerVersionConstraint: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._allowDisableExternalInterface = config.allowDisableExternalInterface;
    this._enabled = config.enabled;
    this._id = config.id;
    this._showDummyRule = config.showDummyRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // allow_disable_external_interface - computed: false, optional: true, required: false
  private _allowDisableExternalInterface?: boolean | cdktf.IResolvable; 
  public get allowDisableExternalInterface() {
    return this.getBooleanAttribute('allow_disable_external_interface');
  }
  public set allowDisableExternalInterface(value: boolean | cdktf.IResolvable) {
    this._allowDisableExternalInterface = value;
  }
  public resetAllowDisableExternalInterface() {
    this._allowDisableExternalInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDisableExternalInterfaceInput() {
    return this._allowDisableExternalInterface;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // show_dummy_rule - computed: false, optional: true, required: false
  private _showDummyRule?: boolean | cdktf.IResolvable; 
  public get showDummyRule() {
    return this.getBooleanAttribute('show_dummy_rule');
  }
  public set showDummyRule(value: boolean | cdktf.IResolvable) {
    this._showDummyRule = value;
  }
  public resetShowDummyRule() {
    this._showDummyRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDummyRuleInput() {
    return this._showDummyRule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      allow_disable_external_interface: cdktf.booleanToTerraform(this._allowDisableExternalInterface),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      show_dummy_rule: cdktf.booleanToTerraform(this._showDummyRule),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_disable_external_interface: {
        value: cdktf.booleanToHclTerraform(this._allowDisableExternalInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_dummy_rule: {
        value: cdktf.booleanToHclTerraform(this._showDummyRule),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

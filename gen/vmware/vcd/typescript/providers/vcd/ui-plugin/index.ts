// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ui_plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UiPluginConfig extends cdktf.TerraformMetaArguments {
  /**
  * true to make the UI Plugin enabled. 'false' to make it disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ui_plugin#enabled UiPlugin#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ui_plugin#id UiPlugin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Absolute or relative path to the ZIP file containing the UI Plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ui_plugin#plugin_path UiPlugin#plugin_path}
  */
  readonly pluginPath?: string;
  /**
  * This value is calculated automatically on create by reading the UI Plugin ZIP file contents. You can updateit to `true` to make it provider scoped or `false` otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ui_plugin#provider_scoped UiPlugin#provider_scoped}
  */
  readonly providerScoped?: boolean | cdktf.IResolvable;
  /**
  * Set of organization IDs to which this UI Plugin must be published
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ui_plugin#tenant_ids UiPlugin#tenant_ids}
  */
  readonly tenantIds?: string[];
  /**
  * This value is calculated automatically on create by reading the UI Plugin ZIP file contents. You can updateit to `true` to make it tenant scoped or `false` otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ui_plugin#tenant_scoped UiPlugin#tenant_scoped}
  */
  readonly tenantScoped?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ui_plugin vcd_ui_plugin}
*/
export class UiPlugin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_ui_plugin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UiPlugin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UiPlugin to import
  * @param importFromId The id of the existing UiPlugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ui_plugin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UiPlugin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_ui_plugin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ui_plugin vcd_ui_plugin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UiPluginConfig
  */
  public constructor(scope: Construct, id: string, config: UiPluginConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_ui_plugin',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._pluginPath = config.pluginPath;
    this._providerScoped = config.providerScoped;
    this._tenantIds = config.tenantIds;
    this._tenantScoped = config.tenantScoped;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
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

  // license - computed: true, optional: false, required: false
  public get license() {
    return this.getStringAttribute('license');
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // plugin_path - computed: false, optional: true, required: false
  private _pluginPath?: string; 
  public get pluginPath() {
    return this.getStringAttribute('plugin_path');
  }
  public set pluginPath(value: string) {
    this._pluginPath = value;
  }
  public resetPluginPath() {
    this._pluginPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginPathInput() {
    return this._pluginPath;
  }

  // provider_scoped - computed: true, optional: true, required: false
  private _providerScoped?: boolean | cdktf.IResolvable; 
  public get providerScoped() {
    return this.getBooleanAttribute('provider_scoped');
  }
  public set providerScoped(value: boolean | cdktf.IResolvable) {
    this._providerScoped = value;
  }
  public resetProviderScoped() {
    this._providerScoped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerScopedInput() {
    return this._providerScoped;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tenant_ids - computed: false, optional: true, required: false
  private _tenantIds?: string[]; 
  public get tenantIds() {
    return cdktf.Fn.tolist(this.getListAttribute('tenant_ids'));
  }
  public set tenantIds(value: string[]) {
    this._tenantIds = value;
  }
  public resetTenantIds() {
    this._tenantIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdsInput() {
    return this._tenantIds;
  }

  // tenant_scoped - computed: true, optional: true, required: false
  private _tenantScoped?: boolean | cdktf.IResolvable; 
  public get tenantScoped() {
    return this.getBooleanAttribute('tenant_scoped');
  }
  public set tenantScoped(value: boolean | cdktf.IResolvable) {
    this._tenantScoped = value;
  }
  public resetTenantScoped() {
    this._tenantScoped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantScopedInput() {
    return this._tenantScoped;
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      plugin_path: cdktf.stringToTerraform(this._pluginPath),
      provider_scoped: cdktf.booleanToTerraform(this._providerScoped),
      tenant_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantIds),
      tenant_scoped: cdktf.booleanToTerraform(this._tenantScoped),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      plugin_path: {
        value: cdktf.stringToHclTerraform(this._pluginPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_scoped: {
        value: cdktf.booleanToHclTerraform(this._providerScoped),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tenant_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenantIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tenant_scoped: {
        value: cdktf.booleanToHclTerraform(this._tenantScoped),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

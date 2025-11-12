// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/hub_extension_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HubExtensionConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Active Gate Group this monitoring configuration will be defined for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/hub_extension_config#active_gate_group HubExtensionConfig#active_gate_group}
  */
  readonly activeGateGroup?: string;
  /**
  * The ID of the host this monitoring configuration will be defined for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/hub_extension_config#host HubExtensionConfig#host}
  */
  readonly host?: string;
  /**
  * The ID of the host group this monitoring configuration will be defined for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/hub_extension_config#host_group HubExtensionConfig#host_group}
  */
  readonly hostGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/hub_extension_config#id HubExtensionConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Management Zone this monitoring configuration will be defined for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/hub_extension_config#management_zone HubExtensionConfig#management_zone}
  */
  readonly managementZone?: string;
  /**
  * The fully qualified name of the extension, such as `com.dynatrace.extension.jmx-liberty-cp`. You can query for these names using the data source `dynatrace_hub_items`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/hub_extension_config#name HubExtensionConfig#name}
  */
  readonly name: string;
  /**
  * The JSON encoded value for this monitoring configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/hub_extension_config#value HubExtensionConfig#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/hub_extension_config dynatrace_hub_extension_config}
*/
export class HubExtensionConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_hub_extension_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HubExtensionConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HubExtensionConfig to import
  * @param importFromId The id of the existing HubExtensionConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/hub_extension_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HubExtensionConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_hub_extension_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/hub_extension_config dynatrace_hub_extension_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HubExtensionConfigConfig
  */
  public constructor(scope: Construct, id: string, config: HubExtensionConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_hub_extension_config',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeGateGroup = config.activeGateGroup;
    this._host = config.host;
    this._hostGroup = config.hostGroup;
    this._id = config.id;
    this._managementZone = config.managementZone;
    this._name = config.name;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_gate_group - computed: false, optional: true, required: false
  private _activeGateGroup?: string; 
  public get activeGateGroup() {
    return this.getStringAttribute('active_gate_group');
  }
  public set activeGateGroup(value: string) {
    this._activeGateGroup = value;
  }
  public resetActiveGateGroup() {
    this._activeGateGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeGateGroupInput() {
    return this._activeGateGroup;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // host_group - computed: false, optional: true, required: false
  private _hostGroup?: string; 
  public get hostGroup() {
    return this.getStringAttribute('host_group');
  }
  public set hostGroup(value: string) {
    this._hostGroup = value;
  }
  public resetHostGroup() {
    this._hostGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupInput() {
    return this._hostGroup;
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

  // management_zone - computed: false, optional: true, required: false
  private _managementZone?: string; 
  public get managementZone() {
    return this.getStringAttribute('management_zone');
  }
  public set managementZone(value: string) {
    this._managementZone = value;
  }
  public resetManagementZone() {
    this._managementZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementZoneInput() {
    return this._managementZone;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_gate_group: cdktf.stringToTerraform(this._activeGateGroup),
      host: cdktf.stringToTerraform(this._host),
      host_group: cdktf.stringToTerraform(this._hostGroup),
      id: cdktf.stringToTerraform(this._id),
      management_zone: cdktf.stringToTerraform(this._managementZone),
      name: cdktf.stringToTerraform(this._name),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_gate_group: {
        value: cdktf.stringToHclTerraform(this._activeGateGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_group: {
        value: cdktf.stringToHclTerraform(this._hostGroup),
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
      management_zone: {
        value: cdktf.stringToHclTerraform(this._managementZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

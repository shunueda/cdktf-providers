// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_prefix_delegated_static
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppliancePrefixDelegatedStaticConfig extends cdktf.TerraformMetaArguments {
  /**
  * A name or description for the prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_prefix_delegated_static#description AppliancePrefixDelegatedStatic#description}
  */
  readonly description?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_prefix_delegated_static#network_id AppliancePrefixDelegatedStatic#network_id}
  */
  readonly networkId: string;
  /**
  * Interfaces associated with the prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_prefix_delegated_static#origin_interfaces AppliancePrefixDelegatedStatic#origin_interfaces}
  */
  readonly originInterfaces?: string[];
  /**
  * Type of the origin
  *   - Choices: `independent`, `internet`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_prefix_delegated_static#origin_type AppliancePrefixDelegatedStatic#origin_type}
  */
  readonly originType: string;
  /**
  * A static IPv6 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_prefix_delegated_static#prefix AppliancePrefixDelegatedStatic#prefix}
  */
  readonly prefix: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_prefix_delegated_static meraki_appliance_prefix_delegated_static}
*/
export class AppliancePrefixDelegatedStatic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_prefix_delegated_static";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppliancePrefixDelegatedStatic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppliancePrefixDelegatedStatic to import
  * @param importFromId The id of the existing AppliancePrefixDelegatedStatic that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_prefix_delegated_static#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppliancePrefixDelegatedStatic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_prefix_delegated_static", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_prefix_delegated_static meraki_appliance_prefix_delegated_static} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppliancePrefixDelegatedStaticConfig
  */
  public constructor(scope: Construct, id: string, config: AppliancePrefixDelegatedStaticConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_prefix_delegated_static',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._networkId = config.networkId;
    this._originInterfaces = config.originInterfaces;
    this._originType = config.originType;
    this._prefix = config.prefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // origin_interfaces - computed: false, optional: true, required: false
  private _originInterfaces?: string[]; 
  public get originInterfaces() {
    return this.getListAttribute('origin_interfaces');
  }
  public set originInterfaces(value: string[]) {
    this._originInterfaces = value;
  }
  public resetOriginInterfaces() {
    this._originInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInterfacesInput() {
    return this._originInterfaces;
  }

  // origin_type - computed: false, optional: false, required: true
  private _originType?: string; 
  public get originType() {
    return this.getStringAttribute('origin_type');
  }
  public set originType(value: string) {
    this._originType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originTypeInput() {
    return this._originType;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      network_id: cdktf.stringToTerraform(this._networkId),
      origin_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._originInterfaces),
      origin_type: cdktf.stringToTerraform(this._originType),
      prefix: cdktf.stringToTerraform(this._prefix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_interfaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._originInterfaces),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      origin_type: {
        value: cdktf.stringToHclTerraform(this._originType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

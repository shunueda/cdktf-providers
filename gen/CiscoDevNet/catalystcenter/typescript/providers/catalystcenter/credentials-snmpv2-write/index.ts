// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/credentials_snmpv2_write
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialsSnmpv2WriteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the SNMPv2 credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/credentials_snmpv2_write#description CredentialsSnmpv2Write#description}
  */
  readonly description: string;
  /**
  * Write community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/credentials_snmpv2_write#write_community CredentialsSnmpv2Write#write_community}
  */
  readonly writeCommunity: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/credentials_snmpv2_write catalystcenter_credentials_snmpv2_write}
*/
export class CredentialsSnmpv2Write extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_credentials_snmpv2_write";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialsSnmpv2Write resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialsSnmpv2Write to import
  * @param importFromId The id of the existing CredentialsSnmpv2Write that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/credentials_snmpv2_write#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialsSnmpv2Write to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_credentials_snmpv2_write", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/credentials_snmpv2_write catalystcenter_credentials_snmpv2_write} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialsSnmpv2WriteConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialsSnmpv2WriteConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_credentials_snmpv2_write',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.4',
        providerVersionConstraint: '0.4.4'
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
    this._writeCommunity = config.writeCommunity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // write_community - computed: false, optional: false, required: true
  private _writeCommunity?: string; 
  public get writeCommunity() {
    return this.getStringAttribute('write_community');
  }
  public set writeCommunity(value: string) {
    this._writeCommunity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeCommunityInput() {
    return this._writeCommunity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      write_community: cdktf.stringToTerraform(this._writeCommunity),
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
      write_community: {
        value: cdktf.stringToHclTerraform(this._writeCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

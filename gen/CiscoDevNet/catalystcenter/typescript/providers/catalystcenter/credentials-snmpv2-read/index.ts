// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/credentials_snmpv2_read
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialsSnmpv2ReadConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the SNMPv2 credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/credentials_snmpv2_read#description CredentialsSnmpv2Read#description}
  */
  readonly description: string;
  /**
  * Read community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/credentials_snmpv2_read#read_community CredentialsSnmpv2Read#read_community}
  */
  readonly readCommunity: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/credentials_snmpv2_read catalystcenter_credentials_snmpv2_read}
*/
export class CredentialsSnmpv2Read extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_credentials_snmpv2_read";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialsSnmpv2Read resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialsSnmpv2Read to import
  * @param importFromId The id of the existing CredentialsSnmpv2Read that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/credentials_snmpv2_read#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialsSnmpv2Read to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_credentials_snmpv2_read", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/credentials_snmpv2_read catalystcenter_credentials_snmpv2_read} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialsSnmpv2ReadConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialsSnmpv2ReadConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_credentials_snmpv2_read',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.2'
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
    this._readCommunity = config.readCommunity;
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

  // read_community - computed: false, optional: false, required: true
  private _readCommunity?: string; 
  public get readCommunity() {
    return this.getStringAttribute('read_community');
  }
  public set readCommunity(value: string) {
    this._readCommunity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readCommunityInput() {
    return this._readCommunity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      read_community: cdktf.stringToTerraform(this._readCommunity),
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
      read_community: {
        value: cdktf.stringToHclTerraform(this._readCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

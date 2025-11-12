// https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/rlsafelist_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RlsafelistEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/rlsafelist_entry#description RlsafelistEntry#description}
  */
  readonly description?: string;
  /**
  * IP address or network in CIDR format, for example "192.168.1.2/32", "192.168.0.0/24", "2001:db8::/32"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/rlsafelist_entry#ipornet RlsafelistEntry#ipornet}
  */
  readonly ipornet: string;
  /**
  * Defines the protocol the entry applies to. 0 means all the supported protocols, 1 SSH, 2 FTP, 4 WebDAV, 8 HTTP. Protocols can be combined, for example 3 means SSH and FTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/rlsafelist_entry#protocols RlsafelistEntry#protocols}
  */
  readonly protocols: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/rlsafelist_entry sftpgo_rlsafelist_entry}
*/
export class RlsafelistEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sftpgo_rlsafelist_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RlsafelistEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RlsafelistEntry to import
  * @param importFromId The id of the existing RlsafelistEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/rlsafelist_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RlsafelistEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sftpgo_rlsafelist_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/rlsafelist_entry sftpgo_rlsafelist_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RlsafelistEntryConfig
  */
  public constructor(scope: Construct, id: string, config: RlsafelistEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'sftpgo_rlsafelist_entry',
      terraformGeneratorMetadata: {
        providerName: 'sftpgo',
        providerVersion: '0.0.19',
        providerVersionConstraint: '0.0.19'
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
    this._ipornet = config.ipornet;
    this._protocols = config.protocols;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

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

  // ipornet - computed: false, optional: false, required: true
  private _ipornet?: string; 
  public get ipornet() {
    return this.getStringAttribute('ipornet');
  }
  public set ipornet(value: string) {
    this._ipornet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipornetInput() {
    return this._ipornet;
  }

  // protocols - computed: false, optional: false, required: true
  private _protocols?: number; 
  public get protocols() {
    return this.getNumberAttribute('protocols');
  }
  public set protocols(value: number) {
    this._protocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      ipornet: cdktf.stringToTerraform(this._ipornet),
      protocols: cdktf.numberToTerraform(this._protocols),
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
      ipornet: {
        value: cdktf.stringToHclTerraform(this._ipornet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocols: {
        value: cdktf.numberToHclTerraform(this._protocols),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

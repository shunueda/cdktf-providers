// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/protection_resource_blacklist_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtectionResourceBlacklistEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/protection_resource_blacklist_entry#id ProtectionResourceBlacklistEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Blocked IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/protection_resource_blacklist_entry#ip ProtectionResourceBlacklistEntry#ip}
  */
  readonly ip: string;
  /**
  * ID of the DDoS protection resource to add blacklist to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/protection_resource_blacklist_entry#resource ProtectionResourceBlacklistEntry#resource}
  */
  readonly resource: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/protection_resource_blacklist_entry edgecenter_protection_resource_blacklist_entry}
*/
export class ProtectionResourceBlacklistEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_protection_resource_blacklist_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtectionResourceBlacklistEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtectionResourceBlacklistEntry to import
  * @param importFromId The id of the existing ProtectionResourceBlacklistEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/protection_resource_blacklist_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtectionResourceBlacklistEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_protection_resource_blacklist_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/resources/protection_resource_blacklist_entry edgecenter_protection_resource_blacklist_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtectionResourceBlacklistEntryConfig
  */
  public constructor(scope: Construct, id: string, config: ProtectionResourceBlacklistEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_protection_resource_blacklist_entry',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.6',
        providerVersionConstraint: '0.10.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ip = config.ip;
    this._resource = config.resource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      resource: cdktf.stringToTerraform(this._resource),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource: {
        value: cdktf.stringToHclTerraform(this._resource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

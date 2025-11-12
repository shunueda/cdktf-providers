// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_ueba
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLogUebaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_ueba#id SystemLogUeba#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_ueba#ip_only_ep SystemLogUeba#ip_only_ep}
  */
  readonly ipOnlyEp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_ueba#ip_unique_scope SystemLogUeba#ip_unique_scope}
  */
  readonly ipUniqueScope?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_ueba fortimanager_system_log_ueba}
*/
export class SystemLogUeba extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_log_ueba";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLogUeba resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLogUeba to import
  * @param importFromId The id of the existing SystemLogUeba that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_ueba#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLogUeba to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_log_ueba", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_ueba fortimanager_system_log_ueba} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLogUebaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemLogUebaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_log_ueba',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
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
    this._ipOnlyEp = config.ipOnlyEp;
    this._ipUniqueScope = config.ipUniqueScope;
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

  // ip_only_ep - computed: true, optional: true, required: false
  private _ipOnlyEp?: string; 
  public get ipOnlyEp() {
    return this.getStringAttribute('ip_only_ep');
  }
  public set ipOnlyEp(value: string) {
    this._ipOnlyEp = value;
  }
  public resetIpOnlyEp() {
    this._ipOnlyEp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOnlyEpInput() {
    return this._ipOnlyEp;
  }

  // ip_unique_scope - computed: true, optional: true, required: false
  private _ipUniqueScope?: string; 
  public get ipUniqueScope() {
    return this.getStringAttribute('ip_unique_scope');
  }
  public set ipUniqueScope(value: string) {
    this._ipUniqueScope = value;
  }
  public resetIpUniqueScope() {
    this._ipUniqueScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipUniqueScopeInput() {
    return this._ipUniqueScope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip_only_ep: cdktf.stringToTerraform(this._ipOnlyEp),
      ip_unique_scope: cdktf.stringToTerraform(this._ipUniqueScope),
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
      ip_only_ep: {
        value: cdktf.stringToHclTerraform(this._ipOnlyEp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_unique_scope: {
        value: cdktf.stringToHclTerraform(this._ipUniqueScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

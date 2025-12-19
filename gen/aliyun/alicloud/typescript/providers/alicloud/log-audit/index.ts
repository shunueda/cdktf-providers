// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_audit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAuditConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_audit#aliuid LogAudit#aliuid}
  */
  readonly aliuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_audit#display_name LogAudit#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_audit#id LogAudit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_audit#multi_account LogAudit#multi_account}
  */
  readonly multiAccount?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_audit#resource_directory_type LogAudit#resource_directory_type}
  */
  readonly resourceDirectoryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_audit#variable_map LogAudit#variable_map}
  */
  readonly variableMap?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_audit alicloud_log_audit}
*/
export class LogAudit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_log_audit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogAudit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogAudit to import
  * @param importFromId The id of the existing LogAudit that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_audit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogAudit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_log_audit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/log_audit alicloud_log_audit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAuditConfig
  */
  public constructor(scope: Construct, id: string, config: LogAuditConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_log_audit',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aliuid = config.aliuid;
    this._displayName = config.displayName;
    this._id = config.id;
    this._multiAccount = config.multiAccount;
    this._resourceDirectoryType = config.resourceDirectoryType;
    this._variableMap = config.variableMap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aliuid - computed: false, optional: false, required: true
  private _aliuid?: string; 
  public get aliuid() {
    return this.getStringAttribute('aliuid');
  }
  public set aliuid(value: string) {
    this._aliuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliuidInput() {
    return this._aliuid;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // multi_account - computed: false, optional: true, required: false
  private _multiAccount?: string[]; 
  public get multiAccount() {
    return cdktf.Fn.tolist(this.getListAttribute('multi_account'));
  }
  public set multiAccount(value: string[]) {
    this._multiAccount = value;
  }
  public resetMultiAccount() {
    this._multiAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAccountInput() {
    return this._multiAccount;
  }

  // resource_directory_type - computed: false, optional: true, required: false
  private _resourceDirectoryType?: string; 
  public get resourceDirectoryType() {
    return this.getStringAttribute('resource_directory_type');
  }
  public set resourceDirectoryType(value: string) {
    this._resourceDirectoryType = value;
  }
  public resetResourceDirectoryType() {
    this._resourceDirectoryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceDirectoryTypeInput() {
    return this._resourceDirectoryType;
  }

  // variable_map - computed: false, optional: true, required: false
  private _variableMap?: { [key: string]: string }; 
  public get variableMap() {
    return this.getStringMapAttribute('variable_map');
  }
  public set variableMap(value: { [key: string]: string }) {
    this._variableMap = value;
  }
  public resetVariableMap() {
    this._variableMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableMapInput() {
    return this._variableMap;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aliuid: cdktf.stringToTerraform(this._aliuid),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      multi_account: cdktf.listMapper(cdktf.stringToTerraform, false)(this._multiAccount),
      resource_directory_type: cdktf.stringToTerraform(this._resourceDirectoryType),
      variable_map: cdktf.hashMapper(cdktf.stringToTerraform)(this._variableMap),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aliuid: {
        value: cdktf.stringToHclTerraform(this._aliuid),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_account: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._multiAccount),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resource_directory_type: {
        value: cdktf.stringToHclTerraform(this._resourceDirectoryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variable_map: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._variableMap),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

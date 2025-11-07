// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/iam_safe_entity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamSafeEntityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/iam_safe_entity#aws_cloud_account_id IamSafeEntity#aws_cloud_account_id}
  */
  readonly awsCloudAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/iam_safe_entity#dome9_users_id_to_protect IamSafeEntity#dome9_users_id_to_protect}
  */
  readonly dome9UsersIdToProtect?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/iam_safe_entity#entity_name IamSafeEntity#entity_name}
  */
  readonly entityName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/iam_safe_entity#entity_type IamSafeEntity#entity_type}
  */
  readonly entityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/iam_safe_entity#id IamSafeEntity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/iam_safe_entity#protection_mode IamSafeEntity#protection_mode}
  */
  readonly protectionMode: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/iam_safe_entity dome9_iam_safe_entity}
*/
export class IamSafeEntity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_iam_safe_entity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamSafeEntity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamSafeEntity to import
  * @param importFromId The id of the existing IamSafeEntity that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/iam_safe_entity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamSafeEntity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_iam_safe_entity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/iam_safe_entity dome9_iam_safe_entity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamSafeEntityConfig
  */
  public constructor(scope: Construct, id: string, config: IamSafeEntityConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_iam_safe_entity',
      terraformGeneratorMetadata: {
        providerName: 'dome9',
        providerVersion: '1.40.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsCloudAccountId = config.awsCloudAccountId;
    this._dome9UsersIdToProtect = config.dome9UsersIdToProtect;
    this._entityName = config.entityName;
    this._entityType = config.entityType;
    this._id = config.id;
    this._protectionMode = config.protectionMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attached_dome9_users - computed: true, optional: false, required: false
  public get attachedDome9Users() {
    return this.getListAttribute('attached_dome9_users');
  }

  // aws_cloud_account_id - computed: false, optional: false, required: true
  private _awsCloudAccountId?: string; 
  public get awsCloudAccountId() {
    return this.getStringAttribute('aws_cloud_account_id');
  }
  public set awsCloudAccountId(value: string) {
    this._awsCloudAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCloudAccountIdInput() {
    return this._awsCloudAccountId;
  }

  // dome9_users_id_to_protect - computed: false, optional: true, required: false
  private _dome9UsersIdToProtect?: string[]; 
  public get dome9UsersIdToProtect() {
    return this.getListAttribute('dome9_users_id_to_protect');
  }
  public set dome9UsersIdToProtect(value: string[]) {
    this._dome9UsersIdToProtect = value;
  }
  public resetDome9UsersIdToProtect() {
    this._dome9UsersIdToProtect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dome9UsersIdToProtectInput() {
    return this._dome9UsersIdToProtect;
  }

  // entity_name - computed: false, optional: false, required: true
  private _entityName?: string; 
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }
  public set entityName(value: string) {
    this._entityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNameInput() {
    return this._entityName;
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // exists_in_aws - computed: true, optional: false, required: false
  public get existsInAws() {
    return this.getBooleanAttribute('exists_in_aws');
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

  // protection_mode - computed: false, optional: false, required: true
  private _protectionMode?: string; 
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }
  public set protectionMode(value: string) {
    this._protectionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionModeInput() {
    return this._protectionMode;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_cloud_account_id: cdktf.stringToTerraform(this._awsCloudAccountId),
      dome9_users_id_to_protect: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dome9UsersIdToProtect),
      entity_name: cdktf.stringToTerraform(this._entityName),
      entity_type: cdktf.stringToTerraform(this._entityType),
      id: cdktf.stringToTerraform(this._id),
      protection_mode: cdktf.stringToTerraform(this._protectionMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_cloud_account_id: {
        value: cdktf.stringToHclTerraform(this._awsCloudAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dome9_users_id_to_protect: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dome9UsersIdToProtect),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      entity_name: {
        value: cdktf.stringToHclTerraform(this._entityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_type: {
        value: cdktf.stringToHclTerraform(this._entityType),
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
      protection_mode: {
        value: cdktf.stringToHclTerraform(this._protectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

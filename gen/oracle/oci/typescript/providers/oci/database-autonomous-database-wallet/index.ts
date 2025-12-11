// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_database_wallet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseAutonomousDatabaseWalletConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_database_wallet#autonomous_database_id DatabaseAutonomousDatabaseWallet#autonomous_database_id}
  */
  readonly autonomousDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_database_wallet#base64_encode_content DatabaseAutonomousDatabaseWallet#base64_encode_content}
  */
  readonly base64EncodeContent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_database_wallet#generate_type DatabaseAutonomousDatabaseWallet#generate_type}
  */
  readonly generateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_database_wallet#id DatabaseAutonomousDatabaseWallet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_database_wallet#is_regional DatabaseAutonomousDatabaseWallet#is_regional}
  */
  readonly isRegional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_database_wallet#password DatabaseAutonomousDatabaseWallet#password}
  */
  readonly password: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_database_wallet#timeouts DatabaseAutonomousDatabaseWallet#timeouts}
  */
  readonly timeouts?: DatabaseAutonomousDatabaseWalletTimeouts;
}
export interface DatabaseAutonomousDatabaseWalletTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_database_wallet#create DatabaseAutonomousDatabaseWallet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_database_wallet#delete DatabaseAutonomousDatabaseWallet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_database_wallet#update DatabaseAutonomousDatabaseWallet#update}
  */
  readonly update?: string;
}

export function databaseAutonomousDatabaseWalletTimeoutsToTerraform(struct?: DatabaseAutonomousDatabaseWalletTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function databaseAutonomousDatabaseWalletTimeoutsToHclTerraform(struct?: DatabaseAutonomousDatabaseWalletTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseAutonomousDatabaseWalletTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseAutonomousDatabaseWalletTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousDatabaseWalletTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_database_wallet oci_database_autonomous_database_wallet}
*/
export class DatabaseAutonomousDatabaseWallet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_autonomous_database_wallet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseAutonomousDatabaseWallet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseAutonomousDatabaseWallet to import
  * @param importFromId The id of the existing DatabaseAutonomousDatabaseWallet that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_database_wallet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseAutonomousDatabaseWallet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_autonomous_database_wallet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_autonomous_database_wallet oci_database_autonomous_database_wallet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseAutonomousDatabaseWalletConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseAutonomousDatabaseWalletConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_database_wallet',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autonomousDatabaseId = config.autonomousDatabaseId;
    this._base64EncodeContent = config.base64EncodeContent;
    this._generateType = config.generateType;
    this._id = config.id;
    this._isRegional = config.isRegional;
    this._password = config.password;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_database_id - computed: false, optional: false, required: true
  private _autonomousDatabaseId?: string; 
  public get autonomousDatabaseId() {
    return this.getStringAttribute('autonomous_database_id');
  }
  public set autonomousDatabaseId(value: string) {
    this._autonomousDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousDatabaseIdInput() {
    return this._autonomousDatabaseId;
  }

  // base64_encode_content - computed: false, optional: true, required: false
  private _base64EncodeContent?: boolean | cdktf.IResolvable; 
  public get base64EncodeContent() {
    return this.getBooleanAttribute('base64_encode_content');
  }
  public set base64EncodeContent(value: boolean | cdktf.IResolvable) {
    this._base64EncodeContent = value;
  }
  public resetBase64EncodeContent() {
    this._base64EncodeContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64EncodeContentInput() {
    return this._base64EncodeContent;
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // generate_type - computed: false, optional: true, required: false
  private _generateType?: string; 
  public get generateType() {
    return this.getStringAttribute('generate_type');
  }
  public set generateType(value: string) {
    this._generateType = value;
  }
  public resetGenerateType() {
    this._generateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateTypeInput() {
    return this._generateType;
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

  // is_regional - computed: true, optional: true, required: false
  private _isRegional?: boolean | cdktf.IResolvable; 
  public get isRegional() {
    return this.getBooleanAttribute('is_regional');
  }
  public set isRegional(value: boolean | cdktf.IResolvable) {
    this._isRegional = value;
  }
  public resetIsRegional() {
    this._isRegional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRegionalInput() {
    return this._isRegional;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseAutonomousDatabaseWalletTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseAutonomousDatabaseWalletTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_database_id: cdktf.stringToTerraform(this._autonomousDatabaseId),
      base64_encode_content: cdktf.booleanToTerraform(this._base64EncodeContent),
      generate_type: cdktf.stringToTerraform(this._generateType),
      id: cdktf.stringToTerraform(this._id),
      is_regional: cdktf.booleanToTerraform(this._isRegional),
      password: cdktf.stringToTerraform(this._password),
      timeouts: databaseAutonomousDatabaseWalletTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autonomous_database_id: {
        value: cdktf.stringToHclTerraform(this._autonomousDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base64_encode_content: {
        value: cdktf.booleanToHclTerraform(this._base64EncodeContent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      generate_type: {
        value: cdktf.stringToHclTerraform(this._generateType),
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
      is_regional: {
        value: cdktf.booleanToHclTerraform(this._isRegional),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: databaseAutonomousDatabaseWalletTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseAutonomousDatabaseWalletTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

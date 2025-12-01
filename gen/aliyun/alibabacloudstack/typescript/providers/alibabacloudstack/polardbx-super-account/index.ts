// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardbx_super_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolardbxSuperAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardbx_super_account#admin_account_description PolardbxSuperAccount#admin_account_description}
  */
  readonly adminAccountDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardbx_super_account#admin_account_name PolardbxSuperAccount#admin_account_name}
  */
  readonly adminAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardbx_super_account#admin_account_password PolardbxSuperAccount#admin_account_password}
  */
  readonly adminAccountPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardbx_super_account#audit_account_description PolardbxSuperAccount#audit_account_description}
  */
  readonly auditAccountDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardbx_super_account#audit_account_name PolardbxSuperAccount#audit_account_name}
  */
  readonly auditAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardbx_super_account#audit_account_password PolardbxSuperAccount#audit_account_password}
  */
  readonly auditAccountPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardbx_super_account#id PolardbxSuperAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardbx_super_account#instance_id PolardbxSuperAccount#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardbx_super_account#security_account_description PolardbxSuperAccount#security_account_description}
  */
  readonly securityAccountDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardbx_super_account#security_account_name PolardbxSuperAccount#security_account_name}
  */
  readonly securityAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardbx_super_account#security_account_password PolardbxSuperAccount#security_account_password}
  */
  readonly securityAccountPassword?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardbx_super_account alibabacloudstack_polardbx_super_account}
*/
export class PolardbxSuperAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_polardbx_super_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolardbxSuperAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolardbxSuperAccount to import
  * @param importFromId The id of the existing PolardbxSuperAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardbx_super_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolardbxSuperAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_polardbx_super_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardbx_super_account alibabacloudstack_polardbx_super_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolardbxSuperAccountConfig
  */
  public constructor(scope: Construct, id: string, config: PolardbxSuperAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_polardbx_super_account',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminAccountDescription = config.adminAccountDescription;
    this._adminAccountName = config.adminAccountName;
    this._adminAccountPassword = config.adminAccountPassword;
    this._auditAccountDescription = config.auditAccountDescription;
    this._auditAccountName = config.auditAccountName;
    this._auditAccountPassword = config.auditAccountPassword;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._securityAccountDescription = config.securityAccountDescription;
    this._securityAccountName = config.securityAccountName;
    this._securityAccountPassword = config.securityAccountPassword;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_account_description - computed: true, optional: true, required: false
  private _adminAccountDescription?: string; 
  public get adminAccountDescription() {
    return this.getStringAttribute('admin_account_description');
  }
  public set adminAccountDescription(value: string) {
    this._adminAccountDescription = value;
  }
  public resetAdminAccountDescription() {
    this._adminAccountDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminAccountDescriptionInput() {
    return this._adminAccountDescription;
  }

  // admin_account_name - computed: false, optional: false, required: true
  private _adminAccountName?: string; 
  public get adminAccountName() {
    return this.getStringAttribute('admin_account_name');
  }
  public set adminAccountName(value: string) {
    this._adminAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminAccountNameInput() {
    return this._adminAccountName;
  }

  // admin_account_password - computed: false, optional: false, required: true
  private _adminAccountPassword?: string; 
  public get adminAccountPassword() {
    return this.getStringAttribute('admin_account_password');
  }
  public set adminAccountPassword(value: string) {
    this._adminAccountPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminAccountPasswordInput() {
    return this._adminAccountPassword;
  }

  // audit_account_description - computed: true, optional: true, required: false
  private _auditAccountDescription?: string; 
  public get auditAccountDescription() {
    return this.getStringAttribute('audit_account_description');
  }
  public set auditAccountDescription(value: string) {
    this._auditAccountDescription = value;
  }
  public resetAuditAccountDescription() {
    this._auditAccountDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditAccountDescriptionInput() {
    return this._auditAccountDescription;
  }

  // audit_account_name - computed: false, optional: true, required: false
  private _auditAccountName?: string; 
  public get auditAccountName() {
    return this.getStringAttribute('audit_account_name');
  }
  public set auditAccountName(value: string) {
    this._auditAccountName = value;
  }
  public resetAuditAccountName() {
    this._auditAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditAccountNameInput() {
    return this._auditAccountName;
  }

  // audit_account_password - computed: false, optional: true, required: false
  private _auditAccountPassword?: string; 
  public get auditAccountPassword() {
    return this.getStringAttribute('audit_account_password');
  }
  public set auditAccountPassword(value: string) {
    this._auditAccountPassword = value;
  }
  public resetAuditAccountPassword() {
    this._auditAccountPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditAccountPasswordInput() {
    return this._auditAccountPassword;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // security_account_description - computed: true, optional: true, required: false
  private _securityAccountDescription?: string; 
  public get securityAccountDescription() {
    return this.getStringAttribute('security_account_description');
  }
  public set securityAccountDescription(value: string) {
    this._securityAccountDescription = value;
  }
  public resetSecurityAccountDescription() {
    this._securityAccountDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAccountDescriptionInput() {
    return this._securityAccountDescription;
  }

  // security_account_name - computed: false, optional: true, required: false
  private _securityAccountName?: string; 
  public get securityAccountName() {
    return this.getStringAttribute('security_account_name');
  }
  public set securityAccountName(value: string) {
    this._securityAccountName = value;
  }
  public resetSecurityAccountName() {
    this._securityAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAccountNameInput() {
    return this._securityAccountName;
  }

  // security_account_password - computed: false, optional: true, required: false
  private _securityAccountPassword?: string; 
  public get securityAccountPassword() {
    return this.getStringAttribute('security_account_password');
  }
  public set securityAccountPassword(value: string) {
    this._securityAccountPassword = value;
  }
  public resetSecurityAccountPassword() {
    this._securityAccountPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAccountPasswordInput() {
    return this._securityAccountPassword;
  }

  // three_roles - computed: true, optional: false, required: false
  public get threeRoles() {
    return this.getBooleanAttribute('three_roles');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_account_description: cdktf.stringToTerraform(this._adminAccountDescription),
      admin_account_name: cdktf.stringToTerraform(this._adminAccountName),
      admin_account_password: cdktf.stringToTerraform(this._adminAccountPassword),
      audit_account_description: cdktf.stringToTerraform(this._auditAccountDescription),
      audit_account_name: cdktf.stringToTerraform(this._auditAccountName),
      audit_account_password: cdktf.stringToTerraform(this._auditAccountPassword),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      security_account_description: cdktf.stringToTerraform(this._securityAccountDescription),
      security_account_name: cdktf.stringToTerraform(this._securityAccountName),
      security_account_password: cdktf.stringToTerraform(this._securityAccountPassword),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_account_description: {
        value: cdktf.stringToHclTerraform(this._adminAccountDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_account_name: {
        value: cdktf.stringToHclTerraform(this._adminAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_account_password: {
        value: cdktf.stringToHclTerraform(this._adminAccountPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_account_description: {
        value: cdktf.stringToHclTerraform(this._auditAccountDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_account_name: {
        value: cdktf.stringToHclTerraform(this._auditAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_account_password: {
        value: cdktf.stringToHclTerraform(this._auditAccountPassword),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_account_description: {
        value: cdktf.stringToHclTerraform(this._securityAccountDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_account_name: {
        value: cdktf.stringToHclTerraform(this._securityAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_account_password: {
        value: cdktf.stringToHclTerraform(this._securityAccountPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

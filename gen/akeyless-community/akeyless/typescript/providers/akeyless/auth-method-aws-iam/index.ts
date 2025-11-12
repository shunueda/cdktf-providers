// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_aws_iam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthMethodAwsIamAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access expiration date in Unix timestamp (select 0 for access without expiry date)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_aws_iam#access_expires AuthMethodAwsIamA#access_expires}
  */
  readonly accessExpires?: number;
  /**
  * Subclaims to include in audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_aws_iam#audit_logs_claims AuthMethodAwsIamA#audit_logs_claims}
  */
  readonly auditLogsClaims?: string[];
  /**
  * A list of full arns that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_aws_iam#bound_arn AuthMethodAwsIamA#bound_arn}
  */
  readonly boundArn?: string[];
  /**
  * A list of AWS account-IDs that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_aws_iam#bound_aws_account_id AuthMethodAwsIamA#bound_aws_account_id}
  */
  readonly boundAwsAccountId: string[];
  /**
  * A CIDR whitelist with the IPs that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_aws_iam#bound_ips AuthMethodAwsIamA#bound_ips}
  */
  readonly boundIps?: string[];
  /**
  * A list of full resource ids that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_aws_iam#bound_resource_id AuthMethodAwsIamA#bound_resource_id}
  */
  readonly boundResourceId?: string[];
  /**
  * A list of full role ids that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_aws_iam#bound_role_id AuthMethodAwsIamA#bound_role_id}
  */
  readonly boundRoleId?: string[];
  /**
  * A list of full role-name that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_aws_iam#bound_role_name AuthMethodAwsIamA#bound_role_name}
  */
  readonly boundRoleName?: string[];
  /**
  * A list of full user ids that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_aws_iam#bound_user_id AuthMethodAwsIamA#bound_user_id}
  */
  readonly boundUserId?: string[];
  /**
  * A list of full user-name that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_aws_iam#bound_user_name AuthMethodAwsIamA#bound_user_name}
  */
  readonly boundUserName?: string[];
  /**
  * Protection from accidental deletion of this auth method, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_aws_iam#delete_protection AuthMethodAwsIamA#delete_protection}
  */
  readonly deleteProtection?: string;
  /**
  * enforce role-association must include sub claims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_aws_iam#force_sub_claims AuthMethodAwsIamA#force_sub_claims}
  */
  readonly forceSubClaims?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_aws_iam#id AuthMethodAwsIamA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Creds expiration time in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_aws_iam#jwt_ttl AuthMethodAwsIamA#jwt_ttl}
  */
  readonly jwtTtl?: number;
  /**
  * Auth Method name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_aws_iam#name AuthMethodAwsIamA#name}
  */
  readonly name: string;
  /**
  *  sts URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_aws_iam#sts_url AuthMethodAwsIamA#sts_url}
  */
  readonly stsUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_aws_iam akeyless_auth_method_aws_iam}
*/
export class AuthMethodAwsIamA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_auth_method_aws_iam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthMethodAwsIamA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthMethodAwsIamA to import
  * @param importFromId The id of the existing AuthMethodAwsIamA that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_aws_iam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthMethodAwsIamA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_auth_method_aws_iam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_aws_iam akeyless_auth_method_aws_iam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthMethodAwsIamAConfig
  */
  public constructor(scope: Construct, id: string, config: AuthMethodAwsIamAConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_auth_method_aws_iam',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessExpires = config.accessExpires;
    this._auditLogsClaims = config.auditLogsClaims;
    this._boundArn = config.boundArn;
    this._boundAwsAccountId = config.boundAwsAccountId;
    this._boundIps = config.boundIps;
    this._boundResourceId = config.boundResourceId;
    this._boundRoleId = config.boundRoleId;
    this._boundRoleName = config.boundRoleName;
    this._boundUserId = config.boundUserId;
    this._boundUserName = config.boundUserName;
    this._deleteProtection = config.deleteProtection;
    this._forceSubClaims = config.forceSubClaims;
    this._id = config.id;
    this._jwtTtl = config.jwtTtl;
    this._name = config.name;
    this._stsUrl = config.stsUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_expires - computed: false, optional: true, required: false
  private _accessExpires?: number; 
  public get accessExpires() {
    return this.getNumberAttribute('access_expires');
  }
  public set accessExpires(value: number) {
    this._accessExpires = value;
  }
  public resetAccessExpires() {
    this._accessExpires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessExpiresInput() {
    return this._accessExpires;
  }

  // access_id - computed: true, optional: false, required: false
  public get accessId() {
    return this.getStringAttribute('access_id');
  }

  // audit_logs_claims - computed: false, optional: true, required: false
  private _auditLogsClaims?: string[]; 
  public get auditLogsClaims() {
    return cdktf.Fn.tolist(this.getListAttribute('audit_logs_claims'));
  }
  public set auditLogsClaims(value: string[]) {
    this._auditLogsClaims = value;
  }
  public resetAuditLogsClaims() {
    this._auditLogsClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogsClaimsInput() {
    return this._auditLogsClaims;
  }

  // bound_arn - computed: false, optional: true, required: false
  private _boundArn?: string[]; 
  public get boundArn() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_arn'));
  }
  public set boundArn(value: string[]) {
    this._boundArn = value;
  }
  public resetBoundArn() {
    this._boundArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundArnInput() {
    return this._boundArn;
  }

  // bound_aws_account_id - computed: false, optional: false, required: true
  private _boundAwsAccountId?: string[]; 
  public get boundAwsAccountId() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_aws_account_id'));
  }
  public set boundAwsAccountId(value: string[]) {
    this._boundAwsAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get boundAwsAccountIdInput() {
    return this._boundAwsAccountId;
  }

  // bound_ips - computed: false, optional: true, required: false
  private _boundIps?: string[]; 
  public get boundIps() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_ips'));
  }
  public set boundIps(value: string[]) {
    this._boundIps = value;
  }
  public resetBoundIps() {
    this._boundIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundIpsInput() {
    return this._boundIps;
  }

  // bound_resource_id - computed: false, optional: true, required: false
  private _boundResourceId?: string[]; 
  public get boundResourceId() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_resource_id'));
  }
  public set boundResourceId(value: string[]) {
    this._boundResourceId = value;
  }
  public resetBoundResourceId() {
    this._boundResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundResourceIdInput() {
    return this._boundResourceId;
  }

  // bound_role_id - computed: false, optional: true, required: false
  private _boundRoleId?: string[]; 
  public get boundRoleId() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_role_id'));
  }
  public set boundRoleId(value: string[]) {
    this._boundRoleId = value;
  }
  public resetBoundRoleId() {
    this._boundRoleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundRoleIdInput() {
    return this._boundRoleId;
  }

  // bound_role_name - computed: false, optional: true, required: false
  private _boundRoleName?: string[]; 
  public get boundRoleName() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_role_name'));
  }
  public set boundRoleName(value: string[]) {
    this._boundRoleName = value;
  }
  public resetBoundRoleName() {
    this._boundRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundRoleNameInput() {
    return this._boundRoleName;
  }

  // bound_user_id - computed: false, optional: true, required: false
  private _boundUserId?: string[]; 
  public get boundUserId() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_user_id'));
  }
  public set boundUserId(value: string[]) {
    this._boundUserId = value;
  }
  public resetBoundUserId() {
    this._boundUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundUserIdInput() {
    return this._boundUserId;
  }

  // bound_user_name - computed: false, optional: true, required: false
  private _boundUserName?: string[]; 
  public get boundUserName() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_user_name'));
  }
  public set boundUserName(value: string[]) {
    this._boundUserName = value;
  }
  public resetBoundUserName() {
    this._boundUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundUserNameInput() {
    return this._boundUserName;
  }

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: string; 
  public get deleteProtection() {
    return this.getStringAttribute('delete_protection');
  }
  public set deleteProtection(value: string) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
  }

  // force_sub_claims - computed: false, optional: true, required: false
  private _forceSubClaims?: boolean | cdktf.IResolvable; 
  public get forceSubClaims() {
    return this.getBooleanAttribute('force_sub_claims');
  }
  public set forceSubClaims(value: boolean | cdktf.IResolvable) {
    this._forceSubClaims = value;
  }
  public resetForceSubClaims() {
    this._forceSubClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSubClaimsInput() {
    return this._forceSubClaims;
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

  // jwt_ttl - computed: false, optional: true, required: false
  private _jwtTtl?: number; 
  public get jwtTtl() {
    return this.getNumberAttribute('jwt_ttl');
  }
  public set jwtTtl(value: number) {
    this._jwtTtl = value;
  }
  public resetJwtTtl() {
    this._jwtTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtTtlInput() {
    return this._jwtTtl;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // sts_url - computed: false, optional: true, required: false
  private _stsUrl?: string; 
  public get stsUrl() {
    return this.getStringAttribute('sts_url');
  }
  public set stsUrl(value: string) {
    this._stsUrl = value;
  }
  public resetStsUrl() {
    this._stsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsUrlInput() {
    return this._stsUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_expires: cdktf.numberToTerraform(this._accessExpires),
      audit_logs_claims: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditLogsClaims),
      bound_arn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundArn),
      bound_aws_account_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundAwsAccountId),
      bound_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundIps),
      bound_resource_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundResourceId),
      bound_role_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundRoleId),
      bound_role_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundRoleName),
      bound_user_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundUserId),
      bound_user_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundUserName),
      delete_protection: cdktf.stringToTerraform(this._deleteProtection),
      force_sub_claims: cdktf.booleanToTerraform(this._forceSubClaims),
      id: cdktf.stringToTerraform(this._id),
      jwt_ttl: cdktf.numberToTerraform(this._jwtTtl),
      name: cdktf.stringToTerraform(this._name),
      sts_url: cdktf.stringToTerraform(this._stsUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_expires: {
        value: cdktf.numberToHclTerraform(this._accessExpires),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      audit_logs_claims: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auditLogsClaims),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_arn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundArn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_aws_account_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundAwsAccountId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_resource_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundResourceId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_role_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundRoleId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_role_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundRoleName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_user_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundUserId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_user_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundUserName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      delete_protection: {
        value: cdktf.stringToHclTerraform(this._deleteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_sub_claims: {
        value: cdktf.booleanToHclTerraform(this._forceSubClaims),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwt_ttl: {
        value: cdktf.numberToHclTerraform(this._jwtTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sts_url: {
        value: cdktf.stringToHclTerraform(this._stsUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

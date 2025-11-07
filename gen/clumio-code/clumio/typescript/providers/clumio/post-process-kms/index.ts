// https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/post_process_kms
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostProcessKmsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of the AWS account linked with Clumio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/post_process_kms#account_id PostProcessKms#account_id}
  */
  readonly accountId: string;
  /**
  * The ARN of the Clumio IAM role principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/post_process_kms#clumio_iam_role_principal PostProcessKms#clumio_iam_role_principal}
  */
  readonly clumioIamRolePrincipal: string;
  /**
  * Indicates if a new customer-managed key was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/post_process_kms#created_multi_region_cmk PostProcessKms#created_multi_region_cmk}
  */
  readonly createdMultiRegionCmk?: boolean | cdktf.IResolvable;
  /**
  * Identifier of the multi region customer-managed key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/post_process_kms#multi_region_cmk_key_id PostProcessKms#multi_region_cmk_key_id}
  */
  readonly multiRegionCmkKeyId?: string;
  /**
  * Region of the AWS account linked with Clumio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/post_process_kms#region PostProcessKms#region}
  */
  readonly region: string;
  /**
  * The ARN of the IAM role to manage the customer-managed key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/post_process_kms#role_arn PostProcessKms#role_arn}
  */
  readonly roleArn: string;
  /**
  * Unique identifier Clumio uses to access the service role within your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/post_process_kms#role_external_id PostProcessKms#role_external_id}
  */
  readonly roleExternalId: string;
  /**
  * Identifier of the IAM role to manage the customer-managed key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/post_process_kms#role_id PostProcessKms#role_id}
  */
  readonly roleId: string;
  /**
  * Version of the BYOK template which was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/post_process_kms#template_version PostProcessKms#template_version}
  */
  readonly templateVersion?: number;
  /**
  * Distinct 36-character token used to identify resources set up by the Clumio BYOK template installation on the account being connected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/post_process_kms#token PostProcessKms#token}
  */
  readonly token: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/post_process_kms clumio_post_process_kms}
*/
export class PostProcessKms extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clumio_post_process_kms";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostProcessKms resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostProcessKms to import
  * @param importFromId The id of the existing PostProcessKms that should be imported. Refer to the {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/post_process_kms#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostProcessKms to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clumio_post_process_kms", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/post_process_kms clumio_post_process_kms} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostProcessKmsConfig
  */
  public constructor(scope: Construct, id: string, config: PostProcessKmsConfig) {
    super(scope, id, {
      terraformResourceType: 'clumio_post_process_kms',
      terraformGeneratorMetadata: {
        providerName: 'clumio',
        providerVersion: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._clumioIamRolePrincipal = config.clumioIamRolePrincipal;
    this._createdMultiRegionCmk = config.createdMultiRegionCmk;
    this._multiRegionCmkKeyId = config.multiRegionCmkKeyId;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._roleExternalId = config.roleExternalId;
    this._roleId = config.roleId;
    this._templateVersion = config.templateVersion;
    this._token = config.token;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // clumio_iam_role_principal - computed: false, optional: false, required: true
  private _clumioIamRolePrincipal?: string; 
  public get clumioIamRolePrincipal() {
    return this.getStringAttribute('clumio_iam_role_principal');
  }
  public set clumioIamRolePrincipal(value: string) {
    this._clumioIamRolePrincipal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clumioIamRolePrincipalInput() {
    return this._clumioIamRolePrincipal;
  }

  // created_multi_region_cmk - computed: false, optional: true, required: false
  private _createdMultiRegionCmk?: boolean | cdktf.IResolvable; 
  public get createdMultiRegionCmk() {
    return this.getBooleanAttribute('created_multi_region_cmk');
  }
  public set createdMultiRegionCmk(value: boolean | cdktf.IResolvable) {
    this._createdMultiRegionCmk = value;
  }
  public resetCreatedMultiRegionCmk() {
    this._createdMultiRegionCmk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdMultiRegionCmkInput() {
    return this._createdMultiRegionCmk;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multi_region_cmk_key_id - computed: false, optional: true, required: false
  private _multiRegionCmkKeyId?: string; 
  public get multiRegionCmkKeyId() {
    return this.getStringAttribute('multi_region_cmk_key_id');
  }
  public set multiRegionCmkKeyId(value: string) {
    this._multiRegionCmkKeyId = value;
  }
  public resetMultiRegionCmkKeyId() {
    this._multiRegionCmkKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiRegionCmkKeyIdInput() {
    return this._multiRegionCmkKeyId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // role_external_id - computed: false, optional: false, required: true
  private _roleExternalId?: string; 
  public get roleExternalId() {
    return this.getStringAttribute('role_external_id');
  }
  public set roleExternalId(value: string) {
    this._roleExternalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleExternalIdInput() {
    return this._roleExternalId;
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // template_version - computed: false, optional: true, required: false
  private _templateVersion?: number; 
  public get templateVersion() {
    return this.getNumberAttribute('template_version');
  }
  public set templateVersion(value: number) {
    this._templateVersion = value;
  }
  public resetTemplateVersion() {
    this._templateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVersionInput() {
    return this._templateVersion;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      clumio_iam_role_principal: cdktf.stringToTerraform(this._clumioIamRolePrincipal),
      created_multi_region_cmk: cdktf.booleanToTerraform(this._createdMultiRegionCmk),
      multi_region_cmk_key_id: cdktf.stringToTerraform(this._multiRegionCmkKeyId),
      region: cdktf.stringToTerraform(this._region),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      role_external_id: cdktf.stringToTerraform(this._roleExternalId),
      role_id: cdktf.stringToTerraform(this._roleId),
      template_version: cdktf.numberToTerraform(this._templateVersion),
      token: cdktf.stringToTerraform(this._token),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clumio_iam_role_principal: {
        value: cdktf.stringToHclTerraform(this._clumioIamRolePrincipal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_multi_region_cmk: {
        value: cdktf.booleanToHclTerraform(this._createdMultiRegionCmk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multi_region_cmk_key_id: {
        value: cdktf.stringToHclTerraform(this._multiRegionCmkKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_external_id: {
        value: cdktf.stringToHclTerraform(this._roleExternalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_id: {
        value: cdktf.stringToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_version: {
        value: cdktf.numberToHclTerraform(this._templateVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

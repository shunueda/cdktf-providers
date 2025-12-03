// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/css_authenticate_domain_owner_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssAuthenticateDomainOwnerOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The domain name to verify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/css_authenticate_domain_owner_operation#domain_name CssAuthenticateDomainOwnerOperation#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/css_authenticate_domain_owner_operation#id CssAuthenticateDomainOwnerOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Authentication type. Possible values:`dnsCheck`: Immediately verify whether the resolution record of the configured dns is consistent with the content to be verified, and save the record if successful.`fileCheck`: Immediately verify whether the web file is consistent with the content to be verified, and save the record if successful.`dbCheck`: Check if authentication has been successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/css_authenticate_domain_owner_operation#verify_type CssAuthenticateDomainOwnerOperation#verify_type}
  */
  readonly verifyType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/css_authenticate_domain_owner_operation tencentcloud_css_authenticate_domain_owner_operation}
*/
export class CssAuthenticateDomainOwnerOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_authenticate_domain_owner_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CssAuthenticateDomainOwnerOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CssAuthenticateDomainOwnerOperation to import
  * @param importFromId The id of the existing CssAuthenticateDomainOwnerOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/css_authenticate_domain_owner_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CssAuthenticateDomainOwnerOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_authenticate_domain_owner_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/css_authenticate_domain_owner_operation tencentcloud_css_authenticate_domain_owner_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssAuthenticateDomainOwnerOperationConfig
  */
  public constructor(scope: Construct, id: string, config: CssAuthenticateDomainOwnerOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_authenticate_domain_owner_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainName = config.domainName;
    this._id = config.id;
    this._verifyType = config.verifyType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // verify_type - computed: false, optional: true, required: false
  private _verifyType?: string; 
  public get verifyType() {
    return this.getStringAttribute('verify_type');
  }
  public set verifyType(value: string) {
    this._verifyType = value;
  }
  public resetVerifyType() {
    this._verifyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTypeInput() {
    return this._verifyType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      verify_type: cdktf.stringToTerraform(this._verifyType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
      verify_type: {
        value: cdktf.stringToHclTerraform(this._verifyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

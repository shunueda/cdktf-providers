// https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/revoke_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RevokeCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional comments for revocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/revoke_certificate#comments RevokeCertificate#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/revoke_certificate#id RevokeCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Issuer common name of the certificate to revoke
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/revoke_certificate#issuer_common_name RevokeCertificate#issuer_common_name}
  */
  readonly issuerCommonName: string;
  /**
  * Reason for certificate revocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/revoke_certificate#reason RevokeCertificate#reason}
  */
  readonly reason: string;
  /**
  * Resource ID hook for the certificate to revoke
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/revoke_certificate#resource_id_hook RevokeCertificate#resource_id_hook}
  */
  readonly resourceIdHook: string;
  /**
  * Serial number of the certificate to revoke
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/revoke_certificate#serial_number RevokeCertificate#serial_number}
  */
  readonly serialNumber: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/revoke_certificate appviewx_revoke_certificate}
*/
export class RevokeCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "appviewx_revoke_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RevokeCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RevokeCertificate to import
  * @param importFromId The id of the existing RevokeCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/revoke_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RevokeCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "appviewx_revoke_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/revoke_certificate appviewx_revoke_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RevokeCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: RevokeCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'appviewx_revoke_certificate',
      terraformGeneratorMetadata: {
        providerName: 'appviewx',
        providerVersion: '1.0.9',
        providerVersionConstraint: '1.0.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comments = config.comments;
    this._id = config.id;
    this._issuerCommonName = config.issuerCommonName;
    this._reason = config.reason;
    this._resourceIdHook = config.resourceIdHook;
    this._serialNumber = config.serialNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // issuer_common_name - computed: false, optional: false, required: true
  private _issuerCommonName?: string; 
  public get issuerCommonName() {
    return this.getStringAttribute('issuer_common_name');
  }
  public set issuerCommonName(value: string) {
    this._issuerCommonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerCommonNameInput() {
    return this._issuerCommonName;
  }

  // reason - computed: false, optional: false, required: true
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_id_hook - computed: false, optional: false, required: true
  private _resourceIdHook?: string; 
  public get resourceIdHook() {
    return this.getStringAttribute('resource_id_hook');
  }
  public set resourceIdHook(value: string) {
    this._resourceIdHook = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdHookInput() {
    return this._resourceIdHook;
  }

  // response_message - computed: true, optional: false, required: false
  public get responseMessage() {
    return this.getStringAttribute('response_message');
  }

  // revocation_success - computed: true, optional: false, required: false
  public get revocationSuccess() {
    return this.getBooleanAttribute('revocation_success');
  }

  // serial_number - computed: false, optional: false, required: true
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      issuer_common_name: cdktf.stringToTerraform(this._issuerCommonName),
      reason: cdktf.stringToTerraform(this._reason),
      resource_id_hook: cdktf.stringToTerraform(this._resourceIdHook),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      issuer_common_name: {
        value: cdktf.stringToHclTerraform(this._issuerCommonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reason: {
        value: cdktf.stringToHclTerraform(this._reason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id_hook: {
        value: cdktf.stringToHclTerraform(this._resourceIdHook),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

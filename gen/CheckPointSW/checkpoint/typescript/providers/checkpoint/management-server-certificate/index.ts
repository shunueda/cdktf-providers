// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_server_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementServerCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate file encoded in base64.<br/>Valid file formats: p12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_server_certificate#base64_certificate ManagementServerCertificate#base64_certificate}
  */
  readonly base64Certificate?: string;
  /**
  * Base64 encoded password of the certificate file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_server_certificate#base64_password ManagementServerCertificate#base64_password}
  */
  readonly base64Password?: string;
  /**
  * Server certificate comments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_server_certificate#comments ManagementServerCertificate#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_server_certificate#id ManagementServerCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_server_certificate#name ManagementServerCertificate#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_server_certificate checkpoint_management_server_certificate}
*/
export class ManagementServerCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_server_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementServerCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementServerCertificate to import
  * @param importFromId The id of the existing ManagementServerCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_server_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementServerCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_server_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_server_certificate checkpoint_management_server_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementServerCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementServerCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_server_certificate',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._base64Certificate = config.base64Certificate;
    this._base64Password = config.base64Password;
    this._comments = config.comments;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64_certificate - computed: false, optional: true, required: false
  private _base64Certificate?: string; 
  public get base64Certificate() {
    return this.getStringAttribute('base64_certificate');
  }
  public set base64Certificate(value: string) {
    this._base64Certificate = value;
  }
  public resetBase64Certificate() {
    this._base64Certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64CertificateInput() {
    return this._base64Certificate;
  }

  // base64_password - computed: false, optional: true, required: false
  private _base64Password?: string; 
  public get base64Password() {
    return this.getStringAttribute('base64_password');
  }
  public set base64Password(value: string) {
    this._base64Password = value;
  }
  public resetBase64Password() {
    this._base64Password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64PasswordInput() {
    return this._base64Password;
  }

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

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // valid_to - computed: true, optional: false, required: false
  public get validTo() {
    return this.getStringAttribute('valid_to');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base64_certificate: cdktf.stringToTerraform(this._base64Certificate),
      base64_password: cdktf.stringToTerraform(this._base64Password),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base64_certificate: {
        value: cdktf.stringToHclTerraform(this._base64Certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base64_password: {
        value: cdktf.stringToHclTerraform(this._base64Password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

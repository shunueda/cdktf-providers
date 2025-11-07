// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_gcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudaccountGcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_gcp#client_email CloudaccountGcp#client_email}
  */
  readonly clientEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_gcp#client_id CloudaccountGcp#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_gcp#client_x509_cert_url CloudaccountGcp#client_x509_cert_url}
  */
  readonly clientX509CertUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_gcp#domain_name CloudaccountGcp#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_gcp#gsuite_user CloudaccountGcp#gsuite_user}
  */
  readonly gsuiteUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_gcp#id CloudaccountGcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_gcp#name CloudaccountGcp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_gcp#organizational_unit_id CloudaccountGcp#organizational_unit_id}
  */
  readonly organizationalUnitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_gcp#private_key CloudaccountGcp#private_key}
  */
  readonly privateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_gcp#private_key_id CloudaccountGcp#private_key_id}
  */
  readonly privateKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_gcp#project_id CloudaccountGcp#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_gcp dome9_cloudaccount_gcp}
*/
export class CloudaccountGcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_cloudaccount_gcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudaccountGcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudaccountGcp to import
  * @param importFromId The id of the existing CloudaccountGcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_gcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudaccountGcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_cloudaccount_gcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloudaccount_gcp dome9_cloudaccount_gcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudaccountGcpConfig
  */
  public constructor(scope: Construct, id: string, config: CloudaccountGcpConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_cloudaccount_gcp',
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
    this._clientEmail = config.clientEmail;
    this._clientId = config.clientId;
    this._clientX509CertUrl = config.clientX509CertUrl;
    this._domainName = config.domainName;
    this._gsuiteUser = config.gsuiteUser;
    this._id = config.id;
    this._name = config.name;
    this._organizationalUnitId = config.organizationalUnitId;
    this._privateKey = config.privateKey;
    this._privateKeyId = config.privateKeyId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_email - computed: false, optional: false, required: true
  private _clientEmail?: string; 
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }
  public set clientEmail(value: string) {
    this._clientEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEmailInput() {
    return this._clientEmail;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_x509_cert_url - computed: false, optional: false, required: true
  private _clientX509CertUrl?: string; 
  public get clientX509CertUrl() {
    return this.getStringAttribute('client_x509_cert_url');
  }
  public set clientX509CertUrl(value: string) {
    this._clientX509CertUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientX509CertUrlInput() {
    return this._clientX509CertUrl;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // gsuite_user - computed: false, optional: true, required: false
  private _gsuiteUser?: string; 
  public get gsuiteUser() {
    return this.getStringAttribute('gsuite_user');
  }
  public set gsuiteUser(value: string) {
    this._gsuiteUser = value;
  }
  public resetGsuiteUser() {
    this._gsuiteUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsuiteUserInput() {
    return this._gsuiteUser;
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

  // organizational_unit_id - computed: false, optional: true, required: false
  private _organizationalUnitId?: string; 
  public get organizationalUnitId() {
    return this.getStringAttribute('organizational_unit_id');
  }
  public set organizationalUnitId(value: string) {
    this._organizationalUnitId = value;
  }
  public resetOrganizationalUnitId() {
    this._organizationalUnitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitIdInput() {
    return this._organizationalUnitId;
  }

  // organizational_unit_name - computed: true, optional: false, required: false
  public get organizationalUnitName() {
    return this.getStringAttribute('organizational_unit_name');
  }

  // organizational_unit_path - computed: true, optional: false, required: false
  public get organizationalUnitPath() {
    return this.getStringAttribute('organizational_unit_path');
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_id - computed: false, optional: false, required: true
  private _privateKeyId?: string; 
  public get privateKeyId() {
    return this.getStringAttribute('private_key_id');
  }
  public set privateKeyId(value: string) {
    this._privateKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyIdInput() {
    return this._privateKeyId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_email: cdktf.stringToTerraform(this._clientEmail),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_x509_cert_url: cdktf.stringToTerraform(this._clientX509CertUrl),
      domain_name: cdktf.stringToTerraform(this._domainName),
      gsuite_user: cdktf.stringToTerraform(this._gsuiteUser),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      organizational_unit_id: cdktf.stringToTerraform(this._organizationalUnitId),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_id: cdktf.stringToTerraform(this._privateKeyId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_email: {
        value: cdktf.stringToHclTerraform(this._clientEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_x509_cert_url: {
        value: cdktf.stringToHclTerraform(this._clientX509CertUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gsuite_user: {
        value: cdktf.stringToHclTerraform(this._gsuiteUser),
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
      organizational_unit_id: {
        value: cdktf.stringToHclTerraform(this._organizationalUnitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_id: {
        value: cdktf.stringToHclTerraform(this._privateKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

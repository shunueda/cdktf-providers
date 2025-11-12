// https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/cloud_keystore_installation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudKeystoreInstallationConfig extends cdktf.TerraformMetaArguments {
  /**
  * ARN of the certificate in AWS. Only used when provisioning for ACM keystore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/cloud_keystore_installation#arn CloudKeystoreInstallation#arn}
  */
  readonly arn?: string;
  /**
  * ID of the certificate to be provisioned to the cloud keystore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/cloud_keystore_installation#certificate_id CloudKeystoreInstallation#certificate_id}
  */
  readonly certificateId: string;
  /**
  * Name the certificate will be identified as in the cloud keystore. Only used when provisioning for AKV and GCM keystores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/cloud_keystore_installation#cloud_certificate_name CloudKeystoreInstallation#cloud_certificate_name}
  */
  readonly cloudCertificateName?: string;
  /**
  * ID of the cloud keystore where the certificate will be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/cloud_keystore_installation#cloud_keystore_id CloudKeystoreInstallation#cloud_keystore_id}
  */
  readonly cloudKeystoreId: string;
  /**
  * Certificate scope of the certificate in Google Cloud. Only used when provisioning for GCM keystore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/cloud_keystore_installation#gcm_cert_scope CloudKeystoreInstallation#gcm_cert_scope}
  */
  readonly gcmCertScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/cloud_keystore_installation#id CloudKeystoreInstallation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/cloud_keystore_installation venafi_cloud_keystore_installation}
*/
export class CloudKeystoreInstallation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "venafi_cloud_keystore_installation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudKeystoreInstallation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudKeystoreInstallation to import
  * @param importFromId The id of the existing CloudKeystoreInstallation that should be imported. Refer to the {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/cloud_keystore_installation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudKeystoreInstallation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "venafi_cloud_keystore_installation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/cloud_keystore_installation venafi_cloud_keystore_installation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudKeystoreInstallationConfig
  */
  public constructor(scope: Construct, id: string, config: CloudKeystoreInstallationConfig) {
    super(scope, id, {
      terraformResourceType: 'venafi_cloud_keystore_installation',
      terraformGeneratorMetadata: {
        providerName: 'venafi',
        providerVersion: '0.23.1',
        providerVersionConstraint: '0.23.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arn = config.arn;
    this._certificateId = config.certificateId;
    this._cloudCertificateName = config.cloudCertificateName;
    this._cloudKeystoreId = config.cloudKeystoreId;
    this._gcmCertScope = config.gcmCertScope;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // certificate_id - computed: false, optional: false, required: true
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // cloud_certificate_id - computed: true, optional: false, required: false
  public get cloudCertificateId() {
    return this.getStringAttribute('cloud_certificate_id');
  }

  // cloud_certificate_metadata - computed: true, optional: false, required: false
  private _cloudCertificateMetadata = new cdktf.StringMap(this, "cloud_certificate_metadata");
  public get cloudCertificateMetadata() {
    return this._cloudCertificateMetadata;
  }

  // cloud_certificate_name - computed: false, optional: true, required: false
  private _cloudCertificateName?: string; 
  public get cloudCertificateName() {
    return this.getStringAttribute('cloud_certificate_name');
  }
  public set cloudCertificateName(value: string) {
    this._cloudCertificateName = value;
  }
  public resetCloudCertificateName() {
    this._cloudCertificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCertificateNameInput() {
    return this._cloudCertificateName;
  }

  // cloud_keystore_id - computed: false, optional: false, required: true
  private _cloudKeystoreId?: string; 
  public get cloudKeystoreId() {
    return this.getStringAttribute('cloud_keystore_id');
  }
  public set cloudKeystoreId(value: string) {
    this._cloudKeystoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudKeystoreIdInput() {
    return this._cloudKeystoreId;
  }

  // gcm_cert_scope - computed: false, optional: true, required: false
  private _gcmCertScope?: string; 
  public get gcmCertScope() {
    return this.getStringAttribute('gcm_cert_scope');
  }
  public set gcmCertScope(value: string) {
    this._gcmCertScope = value;
  }
  public resetGcmCertScope() {
    this._gcmCertScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcmCertScopeInput() {
    return this._gcmCertScope;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      cloud_certificate_name: cdktf.stringToTerraform(this._cloudCertificateName),
      cloud_keystore_id: cdktf.stringToTerraform(this._cloudKeystoreId),
      gcm_cert_scope: cdktf.stringToTerraform(this._gcmCertScope),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arn: {
        value: cdktf.stringToHclTerraform(this._arn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_certificate_name: {
        value: cdktf.stringToHclTerraform(this._cloudCertificateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_keystore_id: {
        value: cdktf.stringToHclTerraform(this._cloudKeystoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcm_cert_scope: {
        value: cdktf.stringToHclTerraform(this._gcmCertScope),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

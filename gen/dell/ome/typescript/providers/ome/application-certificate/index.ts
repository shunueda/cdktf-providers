// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/application_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Base64 encoded certificate. Terraform will replace (delete and recreate) this resource if this attribute is modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/application_certificate#certificate_base64 ApplicationCertificate#certificate_base64}
  */
  readonly certificateBase64: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/application_certificate ome_application_certificate}
*/
export class ApplicationCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_application_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationCertificate to import
  * @param importFromId The id of the existing ApplicationCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/application_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_application_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/application_certificate ome_application_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'ome_application_certificate',
      terraformGeneratorMetadata: {
        providerName: 'ome',
        providerVersion: '1.2.3',
        providerVersionConstraint: '1.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateBase64 = config.certificateBase64;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_base64 - computed: false, optional: false, required: true
  private _certificateBase64?: string; 
  public get certificateBase64() {
    return this.getStringAttribute('certificate_base64');
  }
  public set certificateBase64(value: string) {
    this._certificateBase64 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBase64Input() {
    return this._certificateBase64;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_base64: cdktf.stringToTerraform(this._certificateBase64),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_base64: {
        value: cdktf.stringToHclTerraform(this._certificateBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

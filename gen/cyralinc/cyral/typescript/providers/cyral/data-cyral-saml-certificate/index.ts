// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/saml_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCyralSamlCertificateConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/saml_certificate cyral_saml_certificate}
*/
export class DataCyralSamlCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_saml_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCyralSamlCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCyralSamlCertificate to import
  * @param importFromId The id of the existing DataCyralSamlCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/saml_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCyralSamlCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_saml_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/data-sources/saml_certificate cyral_saml_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCyralSamlCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCyralSamlCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cyral_saml_certificate',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
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
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}

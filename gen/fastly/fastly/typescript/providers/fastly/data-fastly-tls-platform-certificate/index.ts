// https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/data-sources/tls_platform_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFastlyTlsPlatformCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domains that are listed in any certificate's Subject Alternative Names (SAN) list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/data-sources/tls_platform_certificate#domains DataFastlyTlsPlatformCertificate#domains}
  */
  readonly domains?: string[];
  /**
  * Unique ID assigned to certificate by Fastly. Conflicts with all the other filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/data-sources/tls_platform_certificate#id DataFastlyTlsPlatformCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/data-sources/tls_platform_certificate fastly_tls_platform_certificate}
*/
export class DataFastlyTlsPlatformCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly_tls_platform_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFastlyTlsPlatformCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFastlyTlsPlatformCertificate to import
  * @param importFromId The id of the existing DataFastlyTlsPlatformCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/data-sources/tls_platform_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFastlyTlsPlatformCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly_tls_platform_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/data-sources/tls_platform_certificate fastly_tls_platform_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFastlyTlsPlatformCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFastlyTlsPlatformCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fastly_tls_platform_certificate',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.6.0',
        providerVersionConstraint: '8.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domains = config.domains;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_id - computed: true, optional: false, required: false
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // domains - computed: true, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
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

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // replace - computed: true, optional: false, required: false
  public get replace() {
    return this.getBooleanAttribute('replace');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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

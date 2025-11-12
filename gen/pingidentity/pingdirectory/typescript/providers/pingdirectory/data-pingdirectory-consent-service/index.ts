// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryConsentServiceConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_service pingdirectory_consent_service}
*/
export class DataPingdirectoryConsentService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_consent_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryConsentService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryConsentService to import
  * @param importFromId The id of the existing DataPingdirectoryConsentService that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryConsentService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_consent_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/consent_service pingdirectory_consent_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryConsentServiceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryConsentServiceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_consent_service',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }

  // bind_dn - computed: true, optional: false, required: false
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }

  // consent_record_identity_mapper - computed: true, optional: false, required: false
  public get consentRecordIdentityMapper() {
    return cdktf.Fn.tolist(this.getListAttribute('consent_record_identity_mapper'));
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // privileged_consent_scope - computed: true, optional: false, required: false
  public get privilegedConsentScope() {
    return this.getStringAttribute('privileged_consent_scope');
  }

  // search_size_limit - computed: true, optional: false, required: false
  public get searchSizeLimit() {
    return this.getNumberAttribute('search_size_limit');
  }

  // service_account_dn - computed: true, optional: false, required: false
  public get serviceAccountDn() {
    return cdktf.Fn.tolist(this.getListAttribute('service_account_dn'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unprivileged_consent_scope - computed: true, optional: false, required: false
  public get unprivilegedConsentScope() {
    return this.getStringAttribute('unprivileged_consent_scope');
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

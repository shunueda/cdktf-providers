// https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/dead_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNginxproxymanagerDeadHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Id of the dead host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/dead_host#id DataNginxproxymanagerDeadHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/dead_host nginxproxymanager_dead_host}
*/
export class DataNginxproxymanagerDeadHost extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nginxproxymanager_dead_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNginxproxymanagerDeadHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNginxproxymanagerDeadHost to import
  * @param importFromId The id of the existing DataNginxproxymanagerDeadHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/dead_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNginxproxymanagerDeadHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nginxproxymanager_dead_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sander0542/nginxproxymanager/1.2.2/docs/data-sources/dead_host nginxproxymanager_dead_host} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNginxproxymanagerDeadHostConfig
  */
  public constructor(scope: Construct, id: string, config: DataNginxproxymanagerDeadHostConfig) {
    super(scope, id, {
      terraformResourceType: 'nginxproxymanager_dead_host',
      terraformGeneratorMetadata: {
        providerName: 'nginxproxymanager',
        providerVersion: '1.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_config - computed: true, optional: false, required: false
  public get advancedConfig() {
    return this.getStringAttribute('advanced_config');
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getNumberAttribute('certificate_id');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // domain_names - computed: true, optional: false, required: false
  public get domainNames() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_names'));
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // hsts_enabled - computed: true, optional: false, required: false
  public get hstsEnabled() {
    return this.getBooleanAttribute('hsts_enabled');
  }

  // hsts_subdomains - computed: true, optional: false, required: false
  public get hstsSubdomains() {
    return this.getBooleanAttribute('hsts_subdomains');
  }

  // http2_support - computed: true, optional: false, required: false
  public get http2Support() {
    return this.getBooleanAttribute('http2_support');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new cdktf.StringMap(this, "meta");
  public get meta() {
    return this._meta;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // owner_user_id - computed: true, optional: false, required: false
  public get ownerUserId() {
    return this.getNumberAttribute('owner_user_id');
  }

  // ssl_forced - computed: true, optional: false, required: false
  public get sslForced() {
    return this.getBooleanAttribute('ssl_forced');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

// https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/dns_record_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitDnsRecordSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * STACKIT project ID to which the dns record set is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/dns_record_set#project_id DataStackitDnsRecordSet#project_id}
  */
  readonly projectId: string;
  /**
  * The rr set id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/dns_record_set#record_set_id DataStackitDnsRecordSet#record_set_id}
  */
  readonly recordSetId: string;
  /**
  * The zone ID to which is dns record set is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/dns_record_set#zone_id DataStackitDnsRecordSet#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/dns_record_set stackit_dns_record_set}
*/
export class DataStackitDnsRecordSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_dns_record_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitDnsRecordSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitDnsRecordSet to import
  * @param importFromId The id of the existing DataStackitDnsRecordSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/dns_record_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitDnsRecordSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_dns_record_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.71.0/docs/data-sources/dns_record_set stackit_dns_record_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitDnsRecordSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitDnsRecordSetConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_dns_record_set',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.71.0',
        providerVersionConstraint: '0.71.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._projectId = config.projectId;
    this._recordSetId = config.recordSetId;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getStringAttribute('error');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // record_set_id - computed: false, optional: false, required: true
  private _recordSetId?: string; 
  public get recordSetId() {
    return this.getStringAttribute('record_set_id');
  }
  public set recordSetId(value: string) {
    this._recordSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSetIdInput() {
    return this._recordSetId;
  }

  // records - computed: true, optional: false, required: false
  public get records() {
    return this.getListAttribute('records');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      record_set_id: cdktf.stringToTerraform(this._recordSetId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_set_id: {
        value: cdktf.stringToHclTerraform(this._recordSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

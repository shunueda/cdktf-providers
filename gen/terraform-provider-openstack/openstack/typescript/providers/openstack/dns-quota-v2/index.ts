// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/dns_quota_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsQuotaV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/dns_quota_v2#api_export_size DnsQuotaV2#api_export_size}
  */
  readonly apiExportSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/dns_quota_v2#id DnsQuotaV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/dns_quota_v2#project_id DnsQuotaV2#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/dns_quota_v2#recordset_records DnsQuotaV2#recordset_records}
  */
  readonly recordsetRecords?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/dns_quota_v2#region DnsQuotaV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/dns_quota_v2#zone_records DnsQuotaV2#zone_records}
  */
  readonly zoneRecords?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/dns_quota_v2#zone_recordsets DnsQuotaV2#zone_recordsets}
  */
  readonly zoneRecordsets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/dns_quota_v2#zones DnsQuotaV2#zones}
  */
  readonly zones?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/dns_quota_v2#timeouts DnsQuotaV2#timeouts}
  */
  readonly timeouts?: DnsQuotaV2Timeouts;
}
export interface DnsQuotaV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/dns_quota_v2#create DnsQuotaV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/dns_quota_v2#delete DnsQuotaV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/dns_quota_v2#update DnsQuotaV2#update}
  */
  readonly update?: string;
}

export function dnsQuotaV2TimeoutsToTerraform(struct?: DnsQuotaV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dnsQuotaV2TimeoutsToHclTerraform(struct?: DnsQuotaV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsQuotaV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsQuotaV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsQuotaV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/dns_quota_v2 openstack_dns_quota_v2}
*/
export class DnsQuotaV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_dns_quota_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsQuotaV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsQuotaV2 to import
  * @param importFromId The id of the existing DnsQuotaV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/dns_quota_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsQuotaV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_dns_quota_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/dns_quota_v2 openstack_dns_quota_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsQuotaV2Config
  */
  public constructor(scope: Construct, id: string, config: DnsQuotaV2Config) {
    super(scope, id, {
      terraformResourceType: 'openstack_dns_quota_v2',
      terraformGeneratorMetadata: {
        providerName: 'openstack',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiExportSize = config.apiExportSize;
    this._id = config.id;
    this._projectId = config.projectId;
    this._recordsetRecords = config.recordsetRecords;
    this._region = config.region;
    this._zoneRecords = config.zoneRecords;
    this._zoneRecordsets = config.zoneRecordsets;
    this._zones = config.zones;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_export_size - computed: true, optional: true, required: false
  private _apiExportSize?: number; 
  public get apiExportSize() {
    return this.getNumberAttribute('api_export_size');
  }
  public set apiExportSize(value: number) {
    this._apiExportSize = value;
  }
  public resetApiExportSize() {
    this._apiExportSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiExportSizeInput() {
    return this._apiExportSize;
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

  // recordset_records - computed: true, optional: true, required: false
  private _recordsetRecords?: number; 
  public get recordsetRecords() {
    return this.getNumberAttribute('recordset_records');
  }
  public set recordsetRecords(value: number) {
    this._recordsetRecords = value;
  }
  public resetRecordsetRecords() {
    this._recordsetRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordsetRecordsInput() {
    return this._recordsetRecords;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // zone_records - computed: true, optional: true, required: false
  private _zoneRecords?: number; 
  public get zoneRecords() {
    return this.getNumberAttribute('zone_records');
  }
  public set zoneRecords(value: number) {
    this._zoneRecords = value;
  }
  public resetZoneRecords() {
    this._zoneRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneRecordsInput() {
    return this._zoneRecords;
  }

  // zone_recordsets - computed: true, optional: true, required: false
  private _zoneRecordsets?: number; 
  public get zoneRecordsets() {
    return this.getNumberAttribute('zone_recordsets');
  }
  public set zoneRecordsets(value: number) {
    this._zoneRecordsets = value;
  }
  public resetZoneRecordsets() {
    this._zoneRecordsets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneRecordsetsInput() {
    return this._zoneRecordsets;
  }

  // zones - computed: true, optional: true, required: false
  private _zones?: number; 
  public get zones() {
    return this.getNumberAttribute('zones');
  }
  public set zones(value: number) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DnsQuotaV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DnsQuotaV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_export_size: cdktf.numberToTerraform(this._apiExportSize),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      recordset_records: cdktf.numberToTerraform(this._recordsetRecords),
      region: cdktf.stringToTerraform(this._region),
      zone_records: cdktf.numberToTerraform(this._zoneRecords),
      zone_recordsets: cdktf.numberToTerraform(this._zoneRecordsets),
      zones: cdktf.numberToTerraform(this._zones),
      timeouts: dnsQuotaV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_export_size: {
        value: cdktf.numberToHclTerraform(this._apiExportSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      recordset_records: {
        value: cdktf.numberToHclTerraform(this._recordsetRecords),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_records: {
        value: cdktf.numberToHclTerraform(this._zoneRecords),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_recordsets: {
        value: cdktf.numberToHclTerraform(this._zoneRecordsets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zones: {
        value: cdktf.numberToHclTerraform(this._zones),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: dnsQuotaV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsQuotaV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

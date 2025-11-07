// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/zone_dnssec_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiZoneDnssecStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/zone_dnssec_status#zone DataAkamaiZoneDnssecStatus#zone}
  */
  readonly zone: string;
}
export interface DataAkamaiZoneDnssecStatusCurrentRecords {
}

export function dataAkamaiZoneDnssecStatusCurrentRecordsToTerraform(struct?: DataAkamaiZoneDnssecStatusCurrentRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiZoneDnssecStatusCurrentRecordsToHclTerraform(struct?: DataAkamaiZoneDnssecStatusCurrentRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiZoneDnssecStatusCurrentRecordsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiZoneDnssecStatusCurrentRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiZoneDnssecStatusCurrentRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dnskey_record - computed: true, optional: false, required: false
  public get dnskeyRecord() {
    return this.getStringAttribute('dnskey_record');
  }

  // ds_record - computed: true, optional: false, required: false
  public get dsRecord() {
    return this.getStringAttribute('ds_record');
  }

  // expected_ttl - computed: true, optional: false, required: false
  public get expectedTtl() {
    return this.getNumberAttribute('expected_ttl');
  }

  // last_modified_date - computed: true, optional: false, required: false
  public get lastModifiedDate() {
    return this.getStringAttribute('last_modified_date');
  }
}
export interface DataAkamaiZoneDnssecStatusNewRecords {
}

export function dataAkamaiZoneDnssecStatusNewRecordsToTerraform(struct?: DataAkamaiZoneDnssecStatusNewRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiZoneDnssecStatusNewRecordsToHclTerraform(struct?: DataAkamaiZoneDnssecStatusNewRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiZoneDnssecStatusNewRecordsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiZoneDnssecStatusNewRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiZoneDnssecStatusNewRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dnskey_record - computed: true, optional: false, required: false
  public get dnskeyRecord() {
    return this.getStringAttribute('dnskey_record');
  }

  // ds_record - computed: true, optional: false, required: false
  public get dsRecord() {
    return this.getStringAttribute('ds_record');
  }

  // expected_ttl - computed: true, optional: false, required: false
  public get expectedTtl() {
    return this.getNumberAttribute('expected_ttl');
  }

  // last_modified_date - computed: true, optional: false, required: false
  public get lastModifiedDate() {
    return this.getStringAttribute('last_modified_date');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/zone_dnssec_status akamai_zone_dnssec_status}
*/
export class DataAkamaiZoneDnssecStatus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_zone_dnssec_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiZoneDnssecStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiZoneDnssecStatus to import
  * @param importFromId The id of the existing DataAkamaiZoneDnssecStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/zone_dnssec_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiZoneDnssecStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_zone_dnssec_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/zone_dnssec_status akamai_zone_dnssec_status} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiZoneDnssecStatusConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiZoneDnssecStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_zone_dnssec_status',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts - computed: true, optional: false, required: false
  public get alerts() {
    return cdktf.Fn.tolist(this.getListAttribute('alerts'));
  }

  // current_records - computed: true, optional: false, required: false
  private _currentRecords = new DataAkamaiZoneDnssecStatusCurrentRecordsOutputReference(this, "current_records");
  public get currentRecords() {
    return this._currentRecords;
  }

  // new_records - computed: true, optional: false, required: false
  private _newRecords = new DataAkamaiZoneDnssecStatusNewRecordsOutputReference(this, "new_records");
  public get newRecords() {
    return this._newRecords;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

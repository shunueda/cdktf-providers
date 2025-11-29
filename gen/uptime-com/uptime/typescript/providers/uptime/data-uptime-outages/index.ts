// https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/data-sources/outages
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUptimeOutagesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataUptimeOutagesOutages {
}

export function dataUptimeOutagesOutagesToTerraform(struct?: DataUptimeOutagesOutages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUptimeOutagesOutagesToHclTerraform(struct?: DataUptimeOutagesOutages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUptimeOutagesOutagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataUptimeOutagesOutages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUptimeOutagesOutages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // check_address - computed: true, optional: false, required: false
  public get checkAddress() {
    return this.getStringAttribute('check_address');
  }

  // check_monitoring_service_type - computed: true, optional: false, required: false
  public get checkMonitoringServiceType() {
    return this.getStringAttribute('check_monitoring_service_type');
  }

  // check_name - computed: true, optional: false, required: false
  public get checkName() {
    return this.getStringAttribute('check_name');
  }

  // check_pk - computed: true, optional: false, required: false
  public get checkPk() {
    return this.getNumberAttribute('check_pk');
  }

  // check_url - computed: true, optional: false, required: false
  public get checkUrl() {
    return this.getStringAttribute('check_url');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // duration_secs - computed: true, optional: false, required: false
  public get durationSecs() {
    return this.getNumberAttribute('duration_secs');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ignore_alert_url - computed: true, optional: false, required: false
  public get ignoreAlertUrl() {
    return this.getStringAttribute('ignore_alert_url');
  }

  // ignored - computed: true, optional: false, required: false
  public get ignored() {
    return this.getBooleanAttribute('ignored');
  }

  // num_locations_down - computed: true, optional: false, required: false
  public get numLocationsDown() {
    return this.getNumberAttribute('num_locations_down');
  }

  // resolved_at - computed: true, optional: false, required: false
  public get resolvedAt() {
    return this.getStringAttribute('resolved_at');
  }

  // state_is_up - computed: true, optional: false, required: false
  public get stateIsUp() {
    return this.getBooleanAttribute('state_is_up');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataUptimeOutagesOutagesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataUptimeOutagesOutagesOutputReference {
    return new DataUptimeOutagesOutagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/data-sources/outages uptime_outages}
*/
export class DataUptimeOutages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_outages";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUptimeOutages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUptimeOutages to import
  * @param importFromId The id of the existing DataUptimeOutages that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/data-sources/outages#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUptimeOutages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_outages", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/data-sources/outages uptime_outages} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUptimeOutagesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataUptimeOutagesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'uptime_outages',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.18.1',
        providerVersionConstraint: '2.18.1'
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // outages - computed: true, optional: false, required: false
  private _outages = new DataUptimeOutagesOutagesList(this, "outages", false);
  public get outages() {
    return this._outages;
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

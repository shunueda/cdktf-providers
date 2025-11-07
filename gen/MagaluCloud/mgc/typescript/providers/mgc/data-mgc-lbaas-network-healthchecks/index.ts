// https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/data-sources/lbaas_network_healthchecks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMgcLbaasNetworkHealthchecksConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Network Load Balancer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/data-sources/lbaas_network_healthchecks#lb_id DataMgcLbaasNetworkHealthchecks#lb_id}
  */
  readonly lbId: string;
}
export interface DataMgcLbaasNetworkHealthchecksHealthChecks {
}

export function dataMgcLbaasNetworkHealthchecksHealthChecksToTerraform(struct?: DataMgcLbaasNetworkHealthchecksHealthChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMgcLbaasNetworkHealthchecksHealthChecksToHclTerraform(struct?: DataMgcLbaasNetworkHealthchecksHealthChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMgcLbaasNetworkHealthchecksHealthChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMgcLbaasNetworkHealthchecksHealthChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMgcLbaasNetworkHealthchecksHealthChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // healthy_status_code - computed: true, optional: false, required: false
  public get healthyStatusCode() {
    return this.getNumberAttribute('healthy_status_code');
  }

  // healthy_threshold_count - computed: true, optional: false, required: false
  public get healthyThresholdCount() {
    return this.getNumberAttribute('healthy_threshold_count');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // interval_seconds - computed: true, optional: false, required: false
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }

  // unhealthy_threshold_count - computed: true, optional: false, required: false
  public get unhealthyThresholdCount() {
    return this.getNumberAttribute('unhealthy_threshold_count');
  }
}

export class DataMgcLbaasNetworkHealthchecksHealthChecksList extends cdktf.ComplexList {

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
  public get(index: number): DataMgcLbaasNetworkHealthchecksHealthChecksOutputReference {
    return new DataMgcLbaasNetworkHealthchecksHealthChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/data-sources/lbaas_network_healthchecks mgc_lbaas_network_healthchecks}
*/
export class DataMgcLbaasNetworkHealthchecks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_lbaas_network_healthchecks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMgcLbaasNetworkHealthchecks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMgcLbaasNetworkHealthchecks to import
  * @param importFromId The id of the existing DataMgcLbaasNetworkHealthchecks that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/data-sources/lbaas_network_healthchecks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMgcLbaasNetworkHealthchecks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_lbaas_network_healthchecks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/data-sources/lbaas_network_healthchecks mgc_lbaas_network_healthchecks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMgcLbaasNetworkHealthchecksConfig
  */
  public constructor(scope: Construct, id: string, config: DataMgcLbaasNetworkHealthchecksConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_lbaas_network_healthchecks',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._lbId = config.lbId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // health_checks - computed: true, optional: false, required: false
  private _healthChecks = new DataMgcLbaasNetworkHealthchecksHealthChecksList(this, "health_checks", false);
  public get healthChecks() {
    return this._healthChecks;
  }

  // lb_id - computed: false, optional: false, required: true
  private _lbId?: string; 
  public get lbId() {
    return this.getStringAttribute('lb_id');
  }
  public set lbId(value: string) {
    this._lbId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbIdInput() {
    return this._lbId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      lb_id: cdktf.stringToTerraform(this._lbId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      lb_id: {
        value: cdktf.stringToHclTerraform(this._lbId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

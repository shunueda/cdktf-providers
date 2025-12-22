// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/contracts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIonoscloudContractsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataIonoscloudContractsContractsResourceLimits {
}

export function dataIonoscloudContractsContractsResourceLimitsToTerraform(struct?: DataIonoscloudContractsContractsResourceLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIonoscloudContractsContractsResourceLimitsToHclTerraform(struct?: DataIonoscloudContractsContractsResourceLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIonoscloudContractsContractsResourceLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIonoscloudContractsContractsResourceLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIonoscloudContractsContractsResourceLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cores_per_contract - computed: true, optional: false, required: false
  public get coresPerContract() {
    return this.getNumberAttribute('cores_per_contract');
  }

  // cores_per_server - computed: true, optional: false, required: false
  public get coresPerServer() {
    return this.getNumberAttribute('cores_per_server');
  }

  // cores_provisioned - computed: true, optional: false, required: false
  public get coresProvisioned() {
    return this.getNumberAttribute('cores_provisioned');
  }

  // das_volume_provisioned - computed: true, optional: false, required: false
  public get dasVolumeProvisioned() {
    return this.getNumberAttribute('das_volume_provisioned');
  }

  // hdd_limit_per_contract - computed: true, optional: false, required: false
  public get hddLimitPerContract() {
    return this.getNumberAttribute('hdd_limit_per_contract');
  }

  // hdd_limit_per_volume - computed: true, optional: false, required: false
  public get hddLimitPerVolume() {
    return this.getNumberAttribute('hdd_limit_per_volume');
  }

  // hdd_volume_provisioned - computed: true, optional: false, required: false
  public get hddVolumeProvisioned() {
    return this.getNumberAttribute('hdd_volume_provisioned');
  }

  // k8s_cluster_limit_total - computed: true, optional: false, required: false
  public get k8SClusterLimitTotal() {
    return this.getNumberAttribute('k8s_cluster_limit_total');
  }

  // k8s_clusters_provisioned - computed: true, optional: false, required: false
  public get k8SClustersProvisioned() {
    return this.getNumberAttribute('k8s_clusters_provisioned');
  }

  // nat_gateway_limit_total - computed: true, optional: false, required: false
  public get natGatewayLimitTotal() {
    return this.getNumberAttribute('nat_gateway_limit_total');
  }

  // nat_gateway_provisioned - computed: true, optional: false, required: false
  public get natGatewayProvisioned() {
    return this.getNumberAttribute('nat_gateway_provisioned');
  }

  // nlb_limit_total - computed: true, optional: false, required: false
  public get nlbLimitTotal() {
    return this.getNumberAttribute('nlb_limit_total');
  }

  // nlb_provisioned - computed: true, optional: false, required: false
  public get nlbProvisioned() {
    return this.getNumberAttribute('nlb_provisioned');
  }

  // ram_per_contract - computed: true, optional: false, required: false
  public get ramPerContract() {
    return this.getNumberAttribute('ram_per_contract');
  }

  // ram_per_server - computed: true, optional: false, required: false
  public get ramPerServer() {
    return this.getNumberAttribute('ram_per_server');
  }

  // ram_provisioned - computed: true, optional: false, required: false
  public get ramProvisioned() {
    return this.getNumberAttribute('ram_provisioned');
  }

  // reservable_ips - computed: true, optional: false, required: false
  public get reservableIps() {
    return this.getNumberAttribute('reservable_ips');
  }

  // reserved_ips_in_use - computed: true, optional: false, required: false
  public get reservedIpsInUse() {
    return this.getNumberAttribute('reserved_ips_in_use');
  }

  // reserved_ips_on_contract - computed: true, optional: false, required: false
  public get reservedIpsOnContract() {
    return this.getNumberAttribute('reserved_ips_on_contract');
  }

  // rules_per_security_group - computed: true, optional: false, required: false
  public get rulesPerSecurityGroup() {
    return this.getNumberAttribute('rules_per_security_group');
  }

  // security_groups_per_resource - computed: true, optional: false, required: false
  public get securityGroupsPerResource() {
    return this.getNumberAttribute('security_groups_per_resource');
  }

  // security_groups_per_vdc - computed: true, optional: false, required: false
  public get securityGroupsPerVdc() {
    return this.getNumberAttribute('security_groups_per_vdc');
  }

  // ssd_limit_per_contract - computed: true, optional: false, required: false
  public get ssdLimitPerContract() {
    return this.getNumberAttribute('ssd_limit_per_contract');
  }

  // ssd_limit_per_volume - computed: true, optional: false, required: false
  public get ssdLimitPerVolume() {
    return this.getNumberAttribute('ssd_limit_per_volume');
  }

  // ssd_volume_provisioned - computed: true, optional: false, required: false
  public get ssdVolumeProvisioned() {
    return this.getNumberAttribute('ssd_volume_provisioned');
  }
}
export interface DataIonoscloudContractsContracts {
}

export function dataIonoscloudContractsContractsToTerraform(struct?: DataIonoscloudContractsContracts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIonoscloudContractsContractsToHclTerraform(struct?: DataIonoscloudContractsContracts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIonoscloudContractsContractsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIonoscloudContractsContracts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIonoscloudContractsContracts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contract_number - computed: true, optional: false, required: false
  public get contractNumber() {
    return this.getNumberAttribute('contract_number');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // reg_domain - computed: true, optional: false, required: false
  public get regDomain() {
    return this.getStringAttribute('reg_domain');
  }

  // resource_limits - computed: true, optional: false, required: false
  private _resourceLimits = new DataIonoscloudContractsContractsResourceLimitsOutputReference(this, "resource_limits");
  public get resourceLimits() {
    return this._resourceLimits;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataIonoscloudContractsContractsList extends cdktf.ComplexList {

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
  public get(index: number): DataIonoscloudContractsContractsOutputReference {
    return new DataIonoscloudContractsContractsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/contracts ionoscloud_contracts}
*/
export class DataIonoscloudContracts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_contracts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIonoscloudContracts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIonoscloudContracts to import
  * @param importFromId The id of the existing DataIonoscloudContracts that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/contracts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIonoscloudContracts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_contracts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/contracts ionoscloud_contracts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIonoscloudContractsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIonoscloudContractsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_contracts',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.21',
        providerVersionConstraint: '6.7.21'
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

  // contracts - computed: true, optional: false, required: false
  private _contracts = new DataIonoscloudContractsContractsList(this, "contracts", false);
  public get contracts() {
    return this._contracts;
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

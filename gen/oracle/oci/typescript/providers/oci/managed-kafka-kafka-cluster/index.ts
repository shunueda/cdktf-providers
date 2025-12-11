// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedKafkaKafkaClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#client_certificate_bundle ManagedKafkaKafkaCluster#client_certificate_bundle}
  */
  readonly clientCertificateBundle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#cluster_config_id ManagedKafkaKafkaCluster#cluster_config_id}
  */
  readonly clusterConfigId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#cluster_config_version ManagedKafkaKafkaCluster#cluster_config_version}
  */
  readonly clusterConfigVersion: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#cluster_type ManagedKafkaKafkaCluster#cluster_type}
  */
  readonly clusterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#compartment_id ManagedKafkaKafkaCluster#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#coordination_type ManagedKafkaKafkaCluster#coordination_type}
  */
  readonly coordinationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#defined_tags ManagedKafkaKafkaCluster#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#display_name ManagedKafkaKafkaCluster#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#freeform_tags ManagedKafkaKafkaCluster#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#id ManagedKafkaKafkaCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#kafka_version ManagedKafkaKafkaCluster#kafka_version}
  */
  readonly kafkaVersion: string;
  /**
  * access_subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#access_subnets ManagedKafkaKafkaCluster#access_subnets}
  */
  readonly accessSubnets: ManagedKafkaKafkaClusterAccessSubnets[] | cdktf.IResolvable;
  /**
  * broker_shape block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#broker_shape ManagedKafkaKafkaCluster#broker_shape}
  */
  readonly brokerShape: ManagedKafkaKafkaClusterBrokerShape;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#timeouts ManagedKafkaKafkaCluster#timeouts}
  */
  readonly timeouts?: ManagedKafkaKafkaClusterTimeouts;
}
export interface ManagedKafkaKafkaClusterKafkaBootstrapUrls {
}

export function managedKafkaKafkaClusterKafkaBootstrapUrlsToTerraform(struct?: ManagedKafkaKafkaClusterKafkaBootstrapUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managedKafkaKafkaClusterKafkaBootstrapUrlsToHclTerraform(struct?: ManagedKafkaKafkaClusterKafkaBootstrapUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagedKafkaKafkaClusterKafkaBootstrapUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedKafkaKafkaClusterKafkaBootstrapUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedKafkaKafkaClusterKafkaBootstrapUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class ManagedKafkaKafkaClusterKafkaBootstrapUrlsList extends cdktf.ComplexList {

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
  public get(index: number): ManagedKafkaKafkaClusterKafkaBootstrapUrlsOutputReference {
    return new ManagedKafkaKafkaClusterKafkaBootstrapUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedKafkaKafkaClusterAccessSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#subnets ManagedKafkaKafkaCluster#subnets}
  */
  readonly subnets: string[];
}

export function managedKafkaKafkaClusterAccessSubnetsToTerraform(struct?: ManagedKafkaKafkaClusterAccessSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function managedKafkaKafkaClusterAccessSubnetsToHclTerraform(struct?: ManagedKafkaKafkaClusterAccessSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedKafkaKafkaClusterAccessSubnetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagedKafkaKafkaClusterAccessSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedKafkaKafkaClusterAccessSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnets = value.subnets;
    }
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

export class ManagedKafkaKafkaClusterAccessSubnetsList extends cdktf.ComplexList {
  public internalValue? : ManagedKafkaKafkaClusterAccessSubnets[] | cdktf.IResolvable

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
  public get(index: number): ManagedKafkaKafkaClusterAccessSubnetsOutputReference {
    return new ManagedKafkaKafkaClusterAccessSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagedKafkaKafkaClusterBrokerShape {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#node_count ManagedKafkaKafkaCluster#node_count}
  */
  readonly nodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#ocpu_count ManagedKafkaKafkaCluster#ocpu_count}
  */
  readonly ocpuCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#storage_size_in_gbs ManagedKafkaKafkaCluster#storage_size_in_gbs}
  */
  readonly storageSizeInGbs?: number;
}

export function managedKafkaKafkaClusterBrokerShapeToTerraform(struct?: ManagedKafkaKafkaClusterBrokerShapeOutputReference | ManagedKafkaKafkaClusterBrokerShape): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    ocpu_count: cdktf.numberToTerraform(struct!.ocpuCount),
    storage_size_in_gbs: cdktf.numberToTerraform(struct!.storageSizeInGbs),
  }
}


export function managedKafkaKafkaClusterBrokerShapeToHclTerraform(struct?: ManagedKafkaKafkaClusterBrokerShapeOutputReference | ManagedKafkaKafkaClusterBrokerShape): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpu_count: {
      value: cdktf.numberToHclTerraform(struct!.ocpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_size_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.storageSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedKafkaKafkaClusterBrokerShapeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagedKafkaKafkaClusterBrokerShape | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._ocpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpuCount = this._ocpuCount;
    }
    if (this._storageSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSizeInGbs = this._storageSizeInGbs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedKafkaKafkaClusterBrokerShape | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeCount = undefined;
      this._ocpuCount = undefined;
      this._storageSizeInGbs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeCount = value.nodeCount;
      this._ocpuCount = value.ocpuCount;
      this._storageSizeInGbs = value.storageSizeInGbs;
    }
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // ocpu_count - computed: false, optional: false, required: true
  private _ocpuCount?: number; 
  public get ocpuCount() {
    return this.getNumberAttribute('ocpu_count');
  }
  public set ocpuCount(value: number) {
    this._ocpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpuCountInput() {
    return this._ocpuCount;
  }

  // storage_size_in_gbs - computed: true, optional: true, required: false
  private _storageSizeInGbs?: number; 
  public get storageSizeInGbs() {
    return this.getNumberAttribute('storage_size_in_gbs');
  }
  public set storageSizeInGbs(value: number) {
    this._storageSizeInGbs = value;
  }
  public resetStorageSizeInGbs() {
    this._storageSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInGbsInput() {
    return this._storageSizeInGbs;
  }
}
export interface ManagedKafkaKafkaClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#create ManagedKafkaKafkaCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#delete ManagedKafkaKafkaCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#update ManagedKafkaKafkaCluster#update}
  */
  readonly update?: string;
}

export function managedKafkaKafkaClusterTimeoutsToTerraform(struct?: ManagedKafkaKafkaClusterTimeouts | cdktf.IResolvable): any {
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


export function managedKafkaKafkaClusterTimeoutsToHclTerraform(struct?: ManagedKafkaKafkaClusterTimeouts | cdktf.IResolvable): any {
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

export class ManagedKafkaKafkaClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagedKafkaKafkaClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ManagedKafkaKafkaClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster oci_managed_kafka_kafka_cluster}
*/
export class ManagedKafkaKafkaCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_managed_kafka_kafka_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedKafkaKafkaCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedKafkaKafkaCluster to import
  * @param importFromId The id of the existing ManagedKafkaKafkaCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedKafkaKafkaCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_managed_kafka_kafka_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/managed_kafka_kafka_cluster oci_managed_kafka_kafka_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedKafkaKafkaClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedKafkaKafkaClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_managed_kafka_kafka_cluster',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientCertificateBundle = config.clientCertificateBundle;
    this._clusterConfigId = config.clusterConfigId;
    this._clusterConfigVersion = config.clusterConfigVersion;
    this._clusterType = config.clusterType;
    this._compartmentId = config.compartmentId;
    this._coordinationType = config.coordinationType;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._kafkaVersion = config.kafkaVersion;
    this._accessSubnets.internalValue = config.accessSubnets;
    this._brokerShape.internalValue = config.brokerShape;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_certificate_bundle - computed: true, optional: true, required: false
  private _clientCertificateBundle?: string; 
  public get clientCertificateBundle() {
    return this.getStringAttribute('client_certificate_bundle');
  }
  public set clientCertificateBundle(value: string) {
    this._clientCertificateBundle = value;
  }
  public resetClientCertificateBundle() {
    this._clientCertificateBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateBundleInput() {
    return this._clientCertificateBundle;
  }

  // cluster_config_id - computed: false, optional: false, required: true
  private _clusterConfigId?: string; 
  public get clusterConfigId() {
    return this.getStringAttribute('cluster_config_id');
  }
  public set clusterConfigId(value: string) {
    this._clusterConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigIdInput() {
    return this._clusterConfigId;
  }

  // cluster_config_version - computed: false, optional: false, required: true
  private _clusterConfigVersion?: number; 
  public get clusterConfigVersion() {
    return this.getNumberAttribute('cluster_config_version');
  }
  public set clusterConfigVersion(value: number) {
    this._clusterConfigVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigVersionInput() {
    return this._clusterConfigVersion;
  }

  // cluster_type - computed: false, optional: false, required: true
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // coordination_type - computed: false, optional: false, required: true
  private _coordinationType?: string; 
  public get coordinationType() {
    return this.getStringAttribute('coordination_type');
  }
  public set coordinationType(value: string) {
    this._coordinationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinationTypeInput() {
    return this._coordinationType;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // kafka_bootstrap_urls - computed: true, optional: false, required: false
  private _kafkaBootstrapUrls = new ManagedKafkaKafkaClusterKafkaBootstrapUrlsList(this, "kafka_bootstrap_urls", false);
  public get kafkaBootstrapUrls() {
    return this._kafkaBootstrapUrls;
  }

  // kafka_version - computed: false, optional: false, required: true
  private _kafkaVersion?: string; 
  public get kafkaVersion() {
    return this.getStringAttribute('kafka_version');
  }
  public set kafkaVersion(value: string) {
    this._kafkaVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaVersionInput() {
    return this._kafkaVersion;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // access_subnets - computed: false, optional: false, required: true
  private _accessSubnets = new ManagedKafkaKafkaClusterAccessSubnetsList(this, "access_subnets", false);
  public get accessSubnets() {
    return this._accessSubnets;
  }
  public putAccessSubnets(value: ManagedKafkaKafkaClusterAccessSubnets[] | cdktf.IResolvable) {
    this._accessSubnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSubnetsInput() {
    return this._accessSubnets.internalValue;
  }

  // broker_shape - computed: false, optional: false, required: true
  private _brokerShape = new ManagedKafkaKafkaClusterBrokerShapeOutputReference(this, "broker_shape");
  public get brokerShape() {
    return this._brokerShape;
  }
  public putBrokerShape(value: ManagedKafkaKafkaClusterBrokerShape) {
    this._brokerShape.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerShapeInput() {
    return this._brokerShape.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ManagedKafkaKafkaClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ManagedKafkaKafkaClusterTimeouts) {
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
      client_certificate_bundle: cdktf.stringToTerraform(this._clientCertificateBundle),
      cluster_config_id: cdktf.stringToTerraform(this._clusterConfigId),
      cluster_config_version: cdktf.numberToTerraform(this._clusterConfigVersion),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      coordination_type: cdktf.stringToTerraform(this._coordinationType),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      kafka_version: cdktf.stringToTerraform(this._kafkaVersion),
      access_subnets: cdktf.listMapper(managedKafkaKafkaClusterAccessSubnetsToTerraform, true)(this._accessSubnets.internalValue),
      broker_shape: managedKafkaKafkaClusterBrokerShapeToTerraform(this._brokerShape.internalValue),
      timeouts: managedKafkaKafkaClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_certificate_bundle: {
        value: cdktf.stringToHclTerraform(this._clientCertificateBundle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_config_id: {
        value: cdktf.stringToHclTerraform(this._clusterConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_config_version: {
        value: cdktf.numberToHclTerraform(this._clusterConfigVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      coordination_type: {
        value: cdktf.stringToHclTerraform(this._coordinationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kafka_version: {
        value: cdktf.stringToHclTerraform(this._kafkaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_subnets: {
        value: cdktf.listMapperHcl(managedKafkaKafkaClusterAccessSubnetsToHclTerraform, true)(this._accessSubnets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedKafkaKafkaClusterAccessSubnetsList",
      },
      broker_shape: {
        value: managedKafkaKafkaClusterBrokerShapeToHclTerraform(this._brokerShape.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedKafkaKafkaClusterBrokerShapeList",
      },
      timeouts: {
        value: managedKafkaKafkaClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManagedKafkaKafkaClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

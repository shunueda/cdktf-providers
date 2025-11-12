// https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable Kubernetes audit logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#audit_log_enabled K8S#audit_log_enabled}
  */
  readonly auditLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Audit log level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#audit_log_level K8S#audit_log_level}
  */
  readonly auditLogLevel?: string;
  /**
  * The cluster CIDR that will be used to generate the CIDR of nodes, services, and pods. The allowed CIDR prefix length is /16. If this field is empty, the default value is "10.244.0.0/16"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#cluster_cidr K8S#cluster_cidr}
  */
  readonly clusterCidr?: string;
  /**
  * Enables cluster encryption via wireguard if true. Only available for GSK version 1.29 and above. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#cluster_traffic_encryption K8S#cluster_traffic_encryption}
  */
  readonly clusterTrafficEncryption?: boolean | cdktf.IResolvable;
  /**
  * The gridscale k8s PaaS version (issued by gridscale) of this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#gsk_version K8S#gsk_version}
  */
  readonly gskVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#id K8S#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enables Hubble Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#k8s_hubble K8S#k8s_hubble}
  */
  readonly k8SHubble?: boolean | cdktf.IResolvable;
  /**
  * Enable kube-apiserver logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#kube_apiserver_log_enabled K8S#kube_apiserver_log_enabled}
  */
  readonly kubeApiserverLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#labels K8S#labels}
  */
  readonly labels?: string[];
  /**
  * Enable control plane log delivery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#log_delivery K8S#log_delivery}
  */
  readonly logDelivery?: boolean | cdktf.IResolvable;
  /**
  * Access key used to authenticate against Object Storage endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#log_delivery_access_key K8S#log_delivery_access_key}
  */
  readonly logDeliveryAccessKey?: string;
  /**
  * Bucket to upload logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#log_delivery_bucket K8S#log_delivery_bucket}
  */
  readonly logDeliveryBucket?: string;
  /**
  * Object Storage endpoint URL the bucket is located on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#log_delivery_endpoint K8S#log_delivery_endpoint}
  */
  readonly logDeliveryEndpoint?: string;
  /**
  * Time interval (in min), at which log files will be delivered, unless file size limit is reached first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#log_delivery_interval K8S#log_delivery_interval}
  */
  readonly logDeliveryInterval?: number;
  /**
  * Secret key used to authenticate against Object Storage endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#log_delivery_secret_key K8S#log_delivery_secret_key}
  */
  readonly logDeliverySecretKey?: string;
  /**
  * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#name K8S#name}
  */
  readonly name: string;
  /**
  * Custom CA from customer in pem format as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#oidc_ca_pem K8S#oidc_ca_pem}
  */
  readonly oidcCaPem?: string;
  /**
  * A client ID that all tokens must be issued for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#oidc_client_id K8S#oidc_client_id}
  */
  readonly oidcClientId?: string;
  /**
  * Disable or enable OIDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#oidc_enabled K8S#oidc_enabled}
  */
  readonly oidcEnabled?: boolean | cdktf.IResolvable;
  /**
  * JWT claim to use as the user's group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#oidc_groups_claim K8S#oidc_groups_claim}
  */
  readonly oidcGroupsClaim?: string;
  /**
  * Prefix prepended to group claims to prevent clashes with existing names (such as system: groups). For example, the value oidc: will create group names like oidc:engineering and oidc:infra.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#oidc_groups_prefix K8S#oidc_groups_prefix}
  */
  readonly oidcGroupsPrefix?: string;
  /**
  * URL of the provider that allows the API server to discover public signing keys. Only URLs that use the https:// scheme are accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#oidc_issuer_url K8S#oidc_issuer_url}
  */
  readonly oidcIssuerUrl?: string;
  /**
  * A key=value pair that describes a required claim in the ID Token. Multiple claims can be set like this: key1=value1,key2=value2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#oidc_required_claim K8S#oidc_required_claim}
  */
  readonly oidcRequiredClaim?: string;
  /**
  * The signing algorithms accepted. Default is 'RS256'. Other option is 'RS512'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#oidc_signing_algs K8S#oidc_signing_algs}
  */
  readonly oidcSigningAlgs?: string;
  /**
  * JWT claim to use as the user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#oidc_username_claim K8S#oidc_username_claim}
  */
  readonly oidcUsernameClaim?: string;
  /**
  * Prefix prepended to username claims to prevent clashes with existing names (such as system: users). For example, the value oidc: will create usernames like oidc:jane.doe. If this flag isn't provided and --oidc-username-claim is a value other than email the prefix defaults to ( Issuer URL )# where ( Issuer URL ) is the value of --oidc-issuer-url. The value - can be used to disable all prefixing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#oidc_username_prefix K8S#oidc_username_prefix}
  */
  readonly oidcUsernamePrefix?: string;
  /**
  * The k8s release of this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#release K8S#release}
  */
  readonly release?: string;
  /**
  * Security zone UUID linked to PaaS service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#security_zone_uuid K8S#security_zone_uuid}
  */
  readonly securityZoneUuid?: string;
  /**
  * Enable surge node to avoid resources shortage during the cluster upgrade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#surge_node K8S#surge_node}
  */
  readonly surgeNode?: boolean | cdktf.IResolvable;
  /**
  * node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#node_pool K8S#node_pool}
  */
  readonly nodePool: K8SNodePool[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#timeouts K8S#timeouts}
  */
  readonly timeouts?: K8STimeouts;
}
export interface K8SListenPort {
}

export function k8SListenPortToTerraform(struct?: K8SListenPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function k8SListenPortToHclTerraform(struct?: K8SListenPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class K8SListenPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): K8SListenPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SListenPort | undefined) {
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

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class K8SListenPortList extends cdktf.ComplexList {

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
  public get(index: number): K8SListenPortOutputReference {
    return new K8SListenPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface K8SNodePool {
  /**
  * Cores per worker node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#cores K8S#cores}
  */
  readonly cores: number;
  /**
  * Memory per worker node (in GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#memory K8S#memory}
  */
  readonly memory: number;
  /**
  * Name of node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#name K8S#name}
  */
  readonly name: string;
  /**
  * Number of worker nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#node_count K8S#node_count}
  */
  readonly nodeCount: number;
  /**
  * Rocket storage per worker node (in GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#rocket_storage K8S#rocket_storage}
  */
  readonly rocketStorage?: number;
  /**
  * Storage per worker node (in GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#storage K8S#storage}
  */
  readonly storage: number;
  /**
  * Storage type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#storage_type K8S#storage_type}
  */
  readonly storageType: string;
}

export function k8SNodePoolToTerraform(struct?: K8SNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cores: cdktf.numberToTerraform(struct!.cores),
    memory: cdktf.numberToTerraform(struct!.memory),
    name: cdktf.stringToTerraform(struct!.name),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    rocket_storage: cdktf.numberToTerraform(struct!.rocketStorage),
    storage: cdktf.numberToTerraform(struct!.storage),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
  }
}


export function k8SNodePoolToHclTerraform(struct?: K8SNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cores: {
      value: cdktf.numberToHclTerraform(struct!.cores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rocket_storage: {
      value: cdktf.numberToHclTerraform(struct!.rocketStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage: {
      value: cdktf.numberToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): K8SNodePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cores !== undefined) {
      hasAnyValues = true;
      internalValueResult.cores = this._cores;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._rocketStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.rocketStorage = this._rocketStorage;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cores = undefined;
      this._memory = undefined;
      this._name = undefined;
      this._nodeCount = undefined;
      this._rocketStorage = undefined;
      this._storage = undefined;
      this._storageType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cores = value.cores;
      this._memory = value.memory;
      this._name = value.name;
      this._nodeCount = value.nodeCount;
      this._rocketStorage = value.rocketStorage;
      this._storage = value.storage;
      this._storageType = value.storageType;
    }
  }

  // cores - computed: false, optional: false, required: true
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // rocket_storage - computed: false, optional: true, required: false
  private _rocketStorage?: number; 
  public get rocketStorage() {
    return this.getNumberAttribute('rocket_storage');
  }
  public set rocketStorage(value: number) {
    this._rocketStorage = value;
  }
  public resetRocketStorage() {
    this._rocketStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rocketStorageInput() {
    return this._rocketStorage;
  }

  // storage - computed: false, optional: false, required: true
  private _storage?: number; 
  public get storage() {
    return this.getNumberAttribute('storage');
  }
  public set storage(value: number) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }
}

export class K8SNodePoolList extends cdktf.ComplexList {
  public internalValue? : K8SNodePool[] | cdktf.IResolvable

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
  public get(index: number): K8SNodePoolOutputReference {
    return new K8SNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface K8STimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#create K8S#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#delete K8S#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#update K8S#update}
  */
  readonly update?: string;
}

export function k8STimeoutsToTerraform(struct?: K8STimeouts | cdktf.IResolvable): any {
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


export function k8STimeoutsToHclTerraform(struct?: K8STimeouts | cdktf.IResolvable): any {
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

export class K8STimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): K8STimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: K8STimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s gridscale_k8s}
*/
export class K8S extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gridscale_k8s";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8S resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8S to import
  * @param importFromId The id of the existing K8S that should be imported. Refer to the {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8S to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gridscale_k8s", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/k8s gridscale_k8s} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SConfig
  */
  public constructor(scope: Construct, id: string, config: K8SConfig) {
    super(scope, id, {
      terraformResourceType: 'gridscale_k8s',
      terraformGeneratorMetadata: {
        providerName: 'gridscale',
        providerVersion: '2.2.3',
        providerVersionConstraint: '2.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditLogEnabled = config.auditLogEnabled;
    this._auditLogLevel = config.auditLogLevel;
    this._clusterCidr = config.clusterCidr;
    this._clusterTrafficEncryption = config.clusterTrafficEncryption;
    this._gskVersion = config.gskVersion;
    this._id = config.id;
    this._k8SHubble = config.k8SHubble;
    this._kubeApiserverLogEnabled = config.kubeApiserverLogEnabled;
    this._labels = config.labels;
    this._logDelivery = config.logDelivery;
    this._logDeliveryAccessKey = config.logDeliveryAccessKey;
    this._logDeliveryBucket = config.logDeliveryBucket;
    this._logDeliveryEndpoint = config.logDeliveryEndpoint;
    this._logDeliveryInterval = config.logDeliveryInterval;
    this._logDeliverySecretKey = config.logDeliverySecretKey;
    this._name = config.name;
    this._oidcCaPem = config.oidcCaPem;
    this._oidcClientId = config.oidcClientId;
    this._oidcEnabled = config.oidcEnabled;
    this._oidcGroupsClaim = config.oidcGroupsClaim;
    this._oidcGroupsPrefix = config.oidcGroupsPrefix;
    this._oidcIssuerUrl = config.oidcIssuerUrl;
    this._oidcRequiredClaim = config.oidcRequiredClaim;
    this._oidcSigningAlgs = config.oidcSigningAlgs;
    this._oidcUsernameClaim = config.oidcUsernameClaim;
    this._oidcUsernamePrefix = config.oidcUsernamePrefix;
    this._release = config.release;
    this._securityZoneUuid = config.securityZoneUuid;
    this._surgeNode = config.surgeNode;
    this._nodePool.internalValue = config.nodePool;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_log_enabled - computed: true, optional: true, required: false
  private _auditLogEnabled?: boolean | cdktf.IResolvable; 
  public get auditLogEnabled() {
    return this.getBooleanAttribute('audit_log_enabled');
  }
  public set auditLogEnabled(value: boolean | cdktf.IResolvable) {
    this._auditLogEnabled = value;
  }
  public resetAuditLogEnabled() {
    this._auditLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogEnabledInput() {
    return this._auditLogEnabled;
  }

  // audit_log_level - computed: true, optional: true, required: false
  private _auditLogLevel?: string; 
  public get auditLogLevel() {
    return this.getStringAttribute('audit_log_level');
  }
  public set auditLogLevel(value: string) {
    this._auditLogLevel = value;
  }
  public resetAuditLogLevel() {
    this._auditLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogLevelInput() {
    return this._auditLogLevel;
  }

  // change_time - computed: true, optional: false, required: false
  public get changeTime() {
    return this.getStringAttribute('change_time');
  }

  // cluster_cidr - computed: true, optional: true, required: false
  private _clusterCidr?: string; 
  public get clusterCidr() {
    return this.getStringAttribute('cluster_cidr');
  }
  public set clusterCidr(value: string) {
    this._clusterCidr = value;
  }
  public resetClusterCidr() {
    this._clusterCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCidrInput() {
    return this._clusterCidr;
  }

  // cluster_traffic_encryption - computed: false, optional: true, required: false
  private _clusterTrafficEncryption?: boolean | cdktf.IResolvable; 
  public get clusterTrafficEncryption() {
    return this.getBooleanAttribute('cluster_traffic_encryption');
  }
  public set clusterTrafficEncryption(value: boolean | cdktf.IResolvable) {
    this._clusterTrafficEncryption = value;
  }
  public resetClusterTrafficEncryption() {
    this._clusterTrafficEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTrafficEncryptionInput() {
    return this._clusterTrafficEncryption;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // gsk_version - computed: false, optional: true, required: false
  private _gskVersion?: string; 
  public get gskVersion() {
    return this.getStringAttribute('gsk_version');
  }
  public set gskVersion(value: string) {
    this._gskVersion = value;
  }
  public resetGskVersion() {
    this._gskVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gskVersionInput() {
    return this._gskVersion;
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

  // k8s_hubble - computed: true, optional: true, required: false
  private _k8SHubble?: boolean | cdktf.IResolvable; 
  public get k8SHubble() {
    return this.getBooleanAttribute('k8s_hubble');
  }
  public set k8SHubble(value: boolean | cdktf.IResolvable) {
    this._k8SHubble = value;
  }
  public resetK8SHubble() {
    this._k8SHubble = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SHubbleInput() {
    return this._k8SHubble;
  }

  // k8s_private_network_uuid - computed: true, optional: false, required: false
  public get k8SPrivateNetworkUuid() {
    return this.getStringAttribute('k8s_private_network_uuid');
  }

  // kube_apiserver_log_enabled - computed: true, optional: true, required: false
  private _kubeApiserverLogEnabled?: boolean | cdktf.IResolvable; 
  public get kubeApiserverLogEnabled() {
    return this.getBooleanAttribute('kube_apiserver_log_enabled');
  }
  public set kubeApiserverLogEnabled(value: boolean | cdktf.IResolvable) {
    this._kubeApiserverLogEnabled = value;
  }
  public resetKubeApiserverLogEnabled() {
    this._kubeApiserverLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeApiserverLogEnabledInput() {
    return this._kubeApiserverLogEnabled;
  }

  // kubeconfig - computed: true, optional: false, required: false
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // listen_port - computed: true, optional: false, required: false
  private _listenPort = new K8SListenPortList(this, "listen_port", true);
  public get listenPort() {
    return this._listenPort;
  }

  // log_delivery - computed: true, optional: true, required: false
  private _logDelivery?: boolean | cdktf.IResolvable; 
  public get logDelivery() {
    return this.getBooleanAttribute('log_delivery');
  }
  public set logDelivery(value: boolean | cdktf.IResolvable) {
    this._logDelivery = value;
  }
  public resetLogDelivery() {
    this._logDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeliveryInput() {
    return this._logDelivery;
  }

  // log_delivery_access_key - computed: true, optional: true, required: false
  private _logDeliveryAccessKey?: string; 
  public get logDeliveryAccessKey() {
    return this.getStringAttribute('log_delivery_access_key');
  }
  public set logDeliveryAccessKey(value: string) {
    this._logDeliveryAccessKey = value;
  }
  public resetLogDeliveryAccessKey() {
    this._logDeliveryAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeliveryAccessKeyInput() {
    return this._logDeliveryAccessKey;
  }

  // log_delivery_bucket - computed: true, optional: true, required: false
  private _logDeliveryBucket?: string; 
  public get logDeliveryBucket() {
    return this.getStringAttribute('log_delivery_bucket');
  }
  public set logDeliveryBucket(value: string) {
    this._logDeliveryBucket = value;
  }
  public resetLogDeliveryBucket() {
    this._logDeliveryBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeliveryBucketInput() {
    return this._logDeliveryBucket;
  }

  // log_delivery_endpoint - computed: true, optional: true, required: false
  private _logDeliveryEndpoint?: string; 
  public get logDeliveryEndpoint() {
    return this.getStringAttribute('log_delivery_endpoint');
  }
  public set logDeliveryEndpoint(value: string) {
    this._logDeliveryEndpoint = value;
  }
  public resetLogDeliveryEndpoint() {
    this._logDeliveryEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeliveryEndpointInput() {
    return this._logDeliveryEndpoint;
  }

  // log_delivery_interval - computed: true, optional: true, required: false
  private _logDeliveryInterval?: number; 
  public get logDeliveryInterval() {
    return this.getNumberAttribute('log_delivery_interval');
  }
  public set logDeliveryInterval(value: number) {
    this._logDeliveryInterval = value;
  }
  public resetLogDeliveryInterval() {
    this._logDeliveryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeliveryIntervalInput() {
    return this._logDeliveryInterval;
  }

  // log_delivery_secret_key - computed: true, optional: true, required: false
  private _logDeliverySecretKey?: string; 
  public get logDeliverySecretKey() {
    return this.getStringAttribute('log_delivery_secret_key');
  }
  public set logDeliverySecretKey(value: string) {
    this._logDeliverySecretKey = value;
  }
  public resetLogDeliverySecretKey() {
    this._logDeliverySecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeliverySecretKeyInput() {
    return this._logDeliverySecretKey;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_uuid - computed: true, optional: false, required: false
  public get networkUuid() {
    return this.getStringAttribute('network_uuid');
  }

  // oidc_ca_pem - computed: true, optional: true, required: false
  private _oidcCaPem?: string; 
  public get oidcCaPem() {
    return this.getStringAttribute('oidc_ca_pem');
  }
  public set oidcCaPem(value: string) {
    this._oidcCaPem = value;
  }
  public resetOidcCaPem() {
    this._oidcCaPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcCaPemInput() {
    return this._oidcCaPem;
  }

  // oidc_client_id - computed: true, optional: true, required: false
  private _oidcClientId?: string; 
  public get oidcClientId() {
    return this.getStringAttribute('oidc_client_id');
  }
  public set oidcClientId(value: string) {
    this._oidcClientId = value;
  }
  public resetOidcClientId() {
    this._oidcClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClientIdInput() {
    return this._oidcClientId;
  }

  // oidc_enabled - computed: true, optional: true, required: false
  private _oidcEnabled?: boolean | cdktf.IResolvable; 
  public get oidcEnabled() {
    return this.getBooleanAttribute('oidc_enabled');
  }
  public set oidcEnabled(value: boolean | cdktf.IResolvable) {
    this._oidcEnabled = value;
  }
  public resetOidcEnabled() {
    this._oidcEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcEnabledInput() {
    return this._oidcEnabled;
  }

  // oidc_groups_claim - computed: true, optional: true, required: false
  private _oidcGroupsClaim?: string; 
  public get oidcGroupsClaim() {
    return this.getStringAttribute('oidc_groups_claim');
  }
  public set oidcGroupsClaim(value: string) {
    this._oidcGroupsClaim = value;
  }
  public resetOidcGroupsClaim() {
    this._oidcGroupsClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcGroupsClaimInput() {
    return this._oidcGroupsClaim;
  }

  // oidc_groups_prefix - computed: true, optional: true, required: false
  private _oidcGroupsPrefix?: string; 
  public get oidcGroupsPrefix() {
    return this.getStringAttribute('oidc_groups_prefix');
  }
  public set oidcGroupsPrefix(value: string) {
    this._oidcGroupsPrefix = value;
  }
  public resetOidcGroupsPrefix() {
    this._oidcGroupsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcGroupsPrefixInput() {
    return this._oidcGroupsPrefix;
  }

  // oidc_issuer_url - computed: true, optional: true, required: false
  private _oidcIssuerUrl?: string; 
  public get oidcIssuerUrl() {
    return this.getStringAttribute('oidc_issuer_url');
  }
  public set oidcIssuerUrl(value: string) {
    this._oidcIssuerUrl = value;
  }
  public resetOidcIssuerUrl() {
    this._oidcIssuerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcIssuerUrlInput() {
    return this._oidcIssuerUrl;
  }

  // oidc_required_claim - computed: true, optional: true, required: false
  private _oidcRequiredClaim?: string; 
  public get oidcRequiredClaim() {
    return this.getStringAttribute('oidc_required_claim');
  }
  public set oidcRequiredClaim(value: string) {
    this._oidcRequiredClaim = value;
  }
  public resetOidcRequiredClaim() {
    this._oidcRequiredClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcRequiredClaimInput() {
    return this._oidcRequiredClaim;
  }

  // oidc_signing_algs - computed: true, optional: true, required: false
  private _oidcSigningAlgs?: string; 
  public get oidcSigningAlgs() {
    return this.getStringAttribute('oidc_signing_algs');
  }
  public set oidcSigningAlgs(value: string) {
    this._oidcSigningAlgs = value;
  }
  public resetOidcSigningAlgs() {
    this._oidcSigningAlgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcSigningAlgsInput() {
    return this._oidcSigningAlgs;
  }

  // oidc_username_claim - computed: true, optional: true, required: false
  private _oidcUsernameClaim?: string; 
  public get oidcUsernameClaim() {
    return this.getStringAttribute('oidc_username_claim');
  }
  public set oidcUsernameClaim(value: string) {
    this._oidcUsernameClaim = value;
  }
  public resetOidcUsernameClaim() {
    this._oidcUsernameClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcUsernameClaimInput() {
    return this._oidcUsernameClaim;
  }

  // oidc_username_prefix - computed: true, optional: true, required: false
  private _oidcUsernamePrefix?: string; 
  public get oidcUsernamePrefix() {
    return this.getStringAttribute('oidc_username_prefix');
  }
  public set oidcUsernamePrefix(value: string) {
    this._oidcUsernamePrefix = value;
  }
  public resetOidcUsernamePrefix() {
    this._oidcUsernamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcUsernamePrefixInput() {
    return this._oidcUsernamePrefix;
  }

  // release - computed: false, optional: true, required: false
  private _release?: string; 
  public get release() {
    return this.getStringAttribute('release');
  }
  public set release(value: string) {
    this._release = value;
  }
  public resetRelease() {
    this._release = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInput() {
    return this._release;
  }

  // security_zone_uuid - computed: true, optional: true, required: false
  private _securityZoneUuid?: string; 
  public get securityZoneUuid() {
    return this.getStringAttribute('security_zone_uuid');
  }
  public set securityZoneUuid(value: string) {
    this._securityZoneUuid = value;
  }
  public resetSecurityZoneUuid() {
    this._securityZoneUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityZoneUuidInput() {
    return this._securityZoneUuid;
  }

  // service_template_uuid - computed: true, optional: false, required: false
  public get serviceTemplateUuid() {
    return this.getStringAttribute('service_template_uuid');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // surge_node - computed: false, optional: true, required: false
  private _surgeNode?: boolean | cdktf.IResolvable; 
  public get surgeNode() {
    return this.getBooleanAttribute('surge_node');
  }
  public set surgeNode(value: boolean | cdktf.IResolvable) {
    this._surgeNode = value;
  }
  public resetSurgeNode() {
    this._surgeNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surgeNodeInput() {
    return this._surgeNode;
  }

  // usage_in_minutes - computed: true, optional: false, required: false
  public get usageInMinutes() {
    return this.getNumberAttribute('usage_in_minutes');
  }

  // node_pool - computed: false, optional: false, required: true
  private _nodePool = new K8SNodePoolList(this, "node_pool", false);
  public get nodePool() {
    return this._nodePool;
  }
  public putNodePool(value: K8SNodePool[] | cdktf.IResolvable) {
    this._nodePool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolInput() {
    return this._nodePool.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new K8STimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: K8STimeouts) {
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
      audit_log_enabled: cdktf.booleanToTerraform(this._auditLogEnabled),
      audit_log_level: cdktf.stringToTerraform(this._auditLogLevel),
      cluster_cidr: cdktf.stringToTerraform(this._clusterCidr),
      cluster_traffic_encryption: cdktf.booleanToTerraform(this._clusterTrafficEncryption),
      gsk_version: cdktf.stringToTerraform(this._gskVersion),
      id: cdktf.stringToTerraform(this._id),
      k8s_hubble: cdktf.booleanToTerraform(this._k8SHubble),
      kube_apiserver_log_enabled: cdktf.booleanToTerraform(this._kubeApiserverLogEnabled),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      log_delivery: cdktf.booleanToTerraform(this._logDelivery),
      log_delivery_access_key: cdktf.stringToTerraform(this._logDeliveryAccessKey),
      log_delivery_bucket: cdktf.stringToTerraform(this._logDeliveryBucket),
      log_delivery_endpoint: cdktf.stringToTerraform(this._logDeliveryEndpoint),
      log_delivery_interval: cdktf.numberToTerraform(this._logDeliveryInterval),
      log_delivery_secret_key: cdktf.stringToTerraform(this._logDeliverySecretKey),
      name: cdktf.stringToTerraform(this._name),
      oidc_ca_pem: cdktf.stringToTerraform(this._oidcCaPem),
      oidc_client_id: cdktf.stringToTerraform(this._oidcClientId),
      oidc_enabled: cdktf.booleanToTerraform(this._oidcEnabled),
      oidc_groups_claim: cdktf.stringToTerraform(this._oidcGroupsClaim),
      oidc_groups_prefix: cdktf.stringToTerraform(this._oidcGroupsPrefix),
      oidc_issuer_url: cdktf.stringToTerraform(this._oidcIssuerUrl),
      oidc_required_claim: cdktf.stringToTerraform(this._oidcRequiredClaim),
      oidc_signing_algs: cdktf.stringToTerraform(this._oidcSigningAlgs),
      oidc_username_claim: cdktf.stringToTerraform(this._oidcUsernameClaim),
      oidc_username_prefix: cdktf.stringToTerraform(this._oidcUsernamePrefix),
      release: cdktf.stringToTerraform(this._release),
      security_zone_uuid: cdktf.stringToTerraform(this._securityZoneUuid),
      surge_node: cdktf.booleanToTerraform(this._surgeNode),
      node_pool: cdktf.listMapper(k8SNodePoolToTerraform, true)(this._nodePool.internalValue),
      timeouts: k8STimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_log_enabled: {
        value: cdktf.booleanToHclTerraform(this._auditLogEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      audit_log_level: {
        value: cdktf.stringToHclTerraform(this._auditLogLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_cidr: {
        value: cdktf.stringToHclTerraform(this._clusterCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_traffic_encryption: {
        value: cdktf.booleanToHclTerraform(this._clusterTrafficEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gsk_version: {
        value: cdktf.stringToHclTerraform(this._gskVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_hubble: {
        value: cdktf.booleanToHclTerraform(this._k8SHubble),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kube_apiserver_log_enabled: {
        value: cdktf.booleanToHclTerraform(this._kubeApiserverLogEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      log_delivery: {
        value: cdktf.booleanToHclTerraform(this._logDelivery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_delivery_access_key: {
        value: cdktf.stringToHclTerraform(this._logDeliveryAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_delivery_bucket: {
        value: cdktf.stringToHclTerraform(this._logDeliveryBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_delivery_endpoint: {
        value: cdktf.stringToHclTerraform(this._logDeliveryEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_delivery_interval: {
        value: cdktf.numberToHclTerraform(this._logDeliveryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_delivery_secret_key: {
        value: cdktf.stringToHclTerraform(this._logDeliverySecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_ca_pem: {
        value: cdktf.stringToHclTerraform(this._oidcCaPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_client_id: {
        value: cdktf.stringToHclTerraform(this._oidcClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_enabled: {
        value: cdktf.booleanToHclTerraform(this._oidcEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oidc_groups_claim: {
        value: cdktf.stringToHclTerraform(this._oidcGroupsClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_groups_prefix: {
        value: cdktf.stringToHclTerraform(this._oidcGroupsPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_issuer_url: {
        value: cdktf.stringToHclTerraform(this._oidcIssuerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_required_claim: {
        value: cdktf.stringToHclTerraform(this._oidcRequiredClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_signing_algs: {
        value: cdktf.stringToHclTerraform(this._oidcSigningAlgs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_username_claim: {
        value: cdktf.stringToHclTerraform(this._oidcUsernameClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_username_prefix: {
        value: cdktf.stringToHclTerraform(this._oidcUsernamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release: {
        value: cdktf.stringToHclTerraform(this._release),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_zone_uuid: {
        value: cdktf.stringToHclTerraform(this._securityZoneUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      surge_node: {
        value: cdktf.booleanToHclTerraform(this._surgeNode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_pool: {
        value: cdktf.listMapperHcl(k8SNodePoolToHclTerraform, true)(this._nodePool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SNodePoolList",
      },
      timeouts: {
        value: k8STimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "K8STimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

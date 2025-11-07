import * as cdktf from 'cdktf';
import { ClusterNetworkingAmazonVpc,
clusterNetworkingAmazonVpcToTerraform,
clusterNetworkingAmazonVpcToHclTerraform,
ClusterNetworkingAmazonVpcOutputReference,
ClusterNetworkingCalico,
clusterNetworkingCalicoToTerraform,
clusterNetworkingCalicoToHclTerraform,
ClusterNetworkingCalicoOutputReference,
ClusterNetworkingCanal,
clusterNetworkingCanalToTerraform,
clusterNetworkingCanalToHclTerraform,
ClusterNetworkingCanalOutputReference,
ClusterNetworkingCilium,
clusterNetworkingCiliumToTerraform,
clusterNetworkingCiliumToHclTerraform,
ClusterNetworkingCiliumOutputReference,
ClusterNetworkingClassic,
clusterNetworkingClassicToTerraform,
clusterNetworkingClassicToHclTerraform,
ClusterNetworkingClassicOutputReference,
ClusterNetworkingCni,
clusterNetworkingCniToTerraform,
clusterNetworkingCniToHclTerraform,
ClusterNetworkingCniOutputReference,
ClusterNetworkingExternal,
clusterNetworkingExternalToTerraform,
clusterNetworkingExternalToHclTerraform,
ClusterNetworkingExternalOutputReference,
ClusterNetworkingFlannel,
clusterNetworkingFlannelToTerraform,
clusterNetworkingFlannelToHclTerraform,
ClusterNetworkingFlannelOutputReference } from './structs0'
export interface ClusterNetworkingGce {
}

export function clusterNetworkingGceToTerraform(struct?: ClusterNetworkingGceOutputReference | ClusterNetworkingGce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterNetworkingGceToHclTerraform(struct?: ClusterNetworkingGceOutputReference | ClusterNetworkingGce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterNetworkingGceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterNetworkingGce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNetworkingGce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ClusterNetworkingKopeio {
}

export function clusterNetworkingKopeioToTerraform(struct?: ClusterNetworkingKopeioOutputReference | ClusterNetworkingKopeio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterNetworkingKopeioToHclTerraform(struct?: ClusterNetworkingKopeioOutputReference | ClusterNetworkingKopeio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterNetworkingKopeioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterNetworkingKopeio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNetworkingKopeio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ClusterNetworkingKubenet {
}

export function clusterNetworkingKubenetToTerraform(struct?: ClusterNetworkingKubenetOutputReference | ClusterNetworkingKubenet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterNetworkingKubenetToHclTerraform(struct?: ClusterNetworkingKubenetOutputReference | ClusterNetworkingKubenet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterNetworkingKubenetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterNetworkingKubenet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNetworkingKubenet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ClusterNetworkingKuberouter {
}

export function clusterNetworkingKuberouterToTerraform(struct?: ClusterNetworkingKuberouterOutputReference | ClusterNetworkingKuberouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterNetworkingKuberouterToHclTerraform(struct?: ClusterNetworkingKuberouterOutputReference | ClusterNetworkingKuberouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterNetworkingKuberouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterNetworkingKuberouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNetworkingKuberouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ClusterNetworkingLyftVpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#subnet_tags Cluster#subnet_tags}
  */
  readonly subnetTags?: { [key: string]: string };
}

export function clusterNetworkingLyftVpcToTerraform(struct?: ClusterNetworkingLyftVpcOutputReference | ClusterNetworkingLyftVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.subnetTags),
  }
}


export function clusterNetworkingLyftVpcToHclTerraform(struct?: ClusterNetworkingLyftVpcOutputReference | ClusterNetworkingLyftVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.subnetTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterNetworkingLyftVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterNetworkingLyftVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetTags = this._subnetTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNetworkingLyftVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetTags = value.subnetTags;
    }
  }

  // subnet_tags - computed: false, optional: true, required: false
  private _subnetTags?: { [key: string]: string }; 
  public get subnetTags() {
    return this.getStringMapAttribute('subnet_tags');
  }
  public set subnetTags(value: { [key: string]: string }) {
    this._subnetTags = value;
  }
  public resetSubnetTags() {
    this._subnetTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetTagsInput() {
    return this._subnetTags;
  }
}
export interface ClusterNetworkingRomana {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#daemon_service_ip Cluster#daemon_service_ip}
  */
  readonly daemonServiceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#etcd_service_ip Cluster#etcd_service_ip}
  */
  readonly etcdServiceIp?: string;
}

export function clusterNetworkingRomanaToTerraform(struct?: ClusterNetworkingRomanaOutputReference | ClusterNetworkingRomana): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daemon_service_ip: cdktf.stringToTerraform(struct!.daemonServiceIp),
    etcd_service_ip: cdktf.stringToTerraform(struct!.etcdServiceIp),
  }
}


export function clusterNetworkingRomanaToHclTerraform(struct?: ClusterNetworkingRomanaOutputReference | ClusterNetworkingRomana): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daemon_service_ip: {
      value: cdktf.stringToHclTerraform(struct!.daemonServiceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etcd_service_ip: {
      value: cdktf.stringToHclTerraform(struct!.etcdServiceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterNetworkingRomanaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterNetworkingRomana | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daemonServiceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonServiceIp = this._daemonServiceIp;
    }
    if (this._etcdServiceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdServiceIp = this._etcdServiceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNetworkingRomana | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daemonServiceIp = undefined;
      this._etcdServiceIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daemonServiceIp = value.daemonServiceIp;
      this._etcdServiceIp = value.etcdServiceIp;
    }
  }

  // daemon_service_ip - computed: false, optional: true, required: false
  private _daemonServiceIp?: string; 
  public get daemonServiceIp() {
    return this.getStringAttribute('daemon_service_ip');
  }
  public set daemonServiceIp(value: string) {
    this._daemonServiceIp = value;
  }
  public resetDaemonServiceIp() {
    this._daemonServiceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonServiceIpInput() {
    return this._daemonServiceIp;
  }

  // etcd_service_ip - computed: false, optional: true, required: false
  private _etcdServiceIp?: string; 
  public get etcdServiceIp() {
    return this.getStringAttribute('etcd_service_ip');
  }
  public set etcdServiceIp(value: string) {
    this._etcdServiceIp = value;
  }
  public resetEtcdServiceIp() {
    this._etcdServiceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdServiceIpInput() {
    return this._etcdServiceIp;
  }
}
export interface ClusterNetworkingWeave {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#conn_limit Cluster#conn_limit}
  */
  readonly connLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#cpu_limit Cluster#cpu_limit}
  */
  readonly cpuLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#cpu_request Cluster#cpu_request}
  */
  readonly cpuRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#memory_limit Cluster#memory_limit}
  */
  readonly memoryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#memory_request Cluster#memory_request}
  */
  readonly memoryRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#mtu Cluster#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#net_extra_args Cluster#net_extra_args}
  */
  readonly netExtraArgs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#no_masq_local Cluster#no_masq_local}
  */
  readonly noMasqLocal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#npc_cpu_limit Cluster#npc_cpu_limit}
  */
  readonly npcCpuLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#npc_cpu_request Cluster#npc_cpu_request}
  */
  readonly npcCpuRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#npc_extra_args Cluster#npc_extra_args}
  */
  readonly npcExtraArgs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#npc_memory_limit Cluster#npc_memory_limit}
  */
  readonly npcMemoryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#npc_memory_request Cluster#npc_memory_request}
  */
  readonly npcMemoryRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#version Cluster#version}
  */
  readonly version?: string;
}

export function clusterNetworkingWeaveToTerraform(struct?: ClusterNetworkingWeaveOutputReference | ClusterNetworkingWeave): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_limit: cdktf.numberToTerraform(struct!.connLimit),
    cpu_limit: cdktf.stringToTerraform(struct!.cpuLimit),
    cpu_request: cdktf.stringToTerraform(struct!.cpuRequest),
    memory_limit: cdktf.stringToTerraform(struct!.memoryLimit),
    memory_request: cdktf.stringToTerraform(struct!.memoryRequest),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    net_extra_args: cdktf.stringToTerraform(struct!.netExtraArgs),
    no_masq_local: cdktf.numberToTerraform(struct!.noMasqLocal),
    npc_cpu_limit: cdktf.stringToTerraform(struct!.npcCpuLimit),
    npc_cpu_request: cdktf.stringToTerraform(struct!.npcCpuRequest),
    npc_extra_args: cdktf.stringToTerraform(struct!.npcExtraArgs),
    npc_memory_limit: cdktf.stringToTerraform(struct!.npcMemoryLimit),
    npc_memory_request: cdktf.stringToTerraform(struct!.npcMemoryRequest),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function clusterNetworkingWeaveToHclTerraform(struct?: ClusterNetworkingWeaveOutputReference | ClusterNetworkingWeave): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_limit: {
      value: cdktf.numberToHclTerraform(struct!.connLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_limit: {
      value: cdktf.stringToHclTerraform(struct!.cpuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_request: {
      value: cdktf.stringToHclTerraform(struct!.cpuRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.memoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_request: {
      value: cdktf.stringToHclTerraform(struct!.memoryRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_extra_args: {
      value: cdktf.stringToHclTerraform(struct!.netExtraArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_masq_local: {
      value: cdktf.numberToHclTerraform(struct!.noMasqLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    npc_cpu_limit: {
      value: cdktf.stringToHclTerraform(struct!.npcCpuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    npc_cpu_request: {
      value: cdktf.stringToHclTerraform(struct!.npcCpuRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    npc_extra_args: {
      value: cdktf.stringToHclTerraform(struct!.npcExtraArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    npc_memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.npcMemoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    npc_memory_request: {
      value: cdktf.stringToHclTerraform(struct!.npcMemoryRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterNetworkingWeaveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterNetworkingWeave | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connLimit = this._connLimit;
    }
    if (this._cpuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimit = this._cpuLimit;
    }
    if (this._cpuRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuRequest = this._cpuRequest;
    }
    if (this._memoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimit = this._memoryLimit;
    }
    if (this._memoryRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryRequest = this._memoryRequest;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._netExtraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.netExtraArgs = this._netExtraArgs;
    }
    if (this._noMasqLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMasqLocal = this._noMasqLocal;
    }
    if (this._npcCpuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.npcCpuLimit = this._npcCpuLimit;
    }
    if (this._npcCpuRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.npcCpuRequest = this._npcCpuRequest;
    }
    if (this._npcExtraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.npcExtraArgs = this._npcExtraArgs;
    }
    if (this._npcMemoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.npcMemoryLimit = this._npcMemoryLimit;
    }
    if (this._npcMemoryRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.npcMemoryRequest = this._npcMemoryRequest;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNetworkingWeave | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connLimit = undefined;
      this._cpuLimit = undefined;
      this._cpuRequest = undefined;
      this._memoryLimit = undefined;
      this._memoryRequest = undefined;
      this._mtu = undefined;
      this._netExtraArgs = undefined;
      this._noMasqLocal = undefined;
      this._npcCpuLimit = undefined;
      this._npcCpuRequest = undefined;
      this._npcExtraArgs = undefined;
      this._npcMemoryLimit = undefined;
      this._npcMemoryRequest = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connLimit = value.connLimit;
      this._cpuLimit = value.cpuLimit;
      this._cpuRequest = value.cpuRequest;
      this._memoryLimit = value.memoryLimit;
      this._memoryRequest = value.memoryRequest;
      this._mtu = value.mtu;
      this._netExtraArgs = value.netExtraArgs;
      this._noMasqLocal = value.noMasqLocal;
      this._npcCpuLimit = value.npcCpuLimit;
      this._npcCpuRequest = value.npcCpuRequest;
      this._npcExtraArgs = value.npcExtraArgs;
      this._npcMemoryLimit = value.npcMemoryLimit;
      this._npcMemoryRequest = value.npcMemoryRequest;
      this._version = value.version;
    }
  }

  // conn_limit - computed: false, optional: true, required: false
  private _connLimit?: number; 
  public get connLimit() {
    return this.getNumberAttribute('conn_limit');
  }
  public set connLimit(value: number) {
    this._connLimit = value;
  }
  public resetConnLimit() {
    this._connLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLimitInput() {
    return this._connLimit;
  }

  // cpu_limit - computed: false, optional: true, required: false
  private _cpuLimit?: string; 
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }
  public set cpuLimit(value: string) {
    this._cpuLimit = value;
  }
  public resetCpuLimit() {
    this._cpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitInput() {
    return this._cpuLimit;
  }

  // cpu_request - computed: false, optional: true, required: false
  private _cpuRequest?: string; 
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }
  public set cpuRequest(value: string) {
    this._cpuRequest = value;
  }
  public resetCpuRequest() {
    this._cpuRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuRequestInput() {
    return this._cpuRequest;
  }

  // memory_limit - computed: false, optional: true, required: false
  private _memoryLimit?: string; 
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }
  public set memoryLimit(value: string) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }

  // memory_request - computed: false, optional: true, required: false
  private _memoryRequest?: string; 
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
  public set memoryRequest(value: string) {
    this._memoryRequest = value;
  }
  public resetMemoryRequest() {
    this._memoryRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRequestInput() {
    return this._memoryRequest;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // net_extra_args - computed: false, optional: true, required: false
  private _netExtraArgs?: string; 
  public get netExtraArgs() {
    return this.getStringAttribute('net_extra_args');
  }
  public set netExtraArgs(value: string) {
    this._netExtraArgs = value;
  }
  public resetNetExtraArgs() {
    this._netExtraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netExtraArgsInput() {
    return this._netExtraArgs;
  }

  // no_masq_local - computed: false, optional: true, required: false
  private _noMasqLocal?: number; 
  public get noMasqLocal() {
    return this.getNumberAttribute('no_masq_local');
  }
  public set noMasqLocal(value: number) {
    this._noMasqLocal = value;
  }
  public resetNoMasqLocal() {
    this._noMasqLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMasqLocalInput() {
    return this._noMasqLocal;
  }

  // npc_cpu_limit - computed: false, optional: true, required: false
  private _npcCpuLimit?: string; 
  public get npcCpuLimit() {
    return this.getStringAttribute('npc_cpu_limit');
  }
  public set npcCpuLimit(value: string) {
    this._npcCpuLimit = value;
  }
  public resetNpcCpuLimit() {
    this._npcCpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npcCpuLimitInput() {
    return this._npcCpuLimit;
  }

  // npc_cpu_request - computed: false, optional: true, required: false
  private _npcCpuRequest?: string; 
  public get npcCpuRequest() {
    return this.getStringAttribute('npc_cpu_request');
  }
  public set npcCpuRequest(value: string) {
    this._npcCpuRequest = value;
  }
  public resetNpcCpuRequest() {
    this._npcCpuRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npcCpuRequestInput() {
    return this._npcCpuRequest;
  }

  // npc_extra_args - computed: false, optional: true, required: false
  private _npcExtraArgs?: string; 
  public get npcExtraArgs() {
    return this.getStringAttribute('npc_extra_args');
  }
  public set npcExtraArgs(value: string) {
    this._npcExtraArgs = value;
  }
  public resetNpcExtraArgs() {
    this._npcExtraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npcExtraArgsInput() {
    return this._npcExtraArgs;
  }

  // npc_memory_limit - computed: false, optional: true, required: false
  private _npcMemoryLimit?: string; 
  public get npcMemoryLimit() {
    return this.getStringAttribute('npc_memory_limit');
  }
  public set npcMemoryLimit(value: string) {
    this._npcMemoryLimit = value;
  }
  public resetNpcMemoryLimit() {
    this._npcMemoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npcMemoryLimitInput() {
    return this._npcMemoryLimit;
  }

  // npc_memory_request - computed: false, optional: true, required: false
  private _npcMemoryRequest?: string; 
  public get npcMemoryRequest() {
    return this.getStringAttribute('npc_memory_request');
  }
  public set npcMemoryRequest(value: string) {
    this._npcMemoryRequest = value;
  }
  public resetNpcMemoryRequest() {
    this._npcMemoryRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npcMemoryRequestInput() {
    return this._npcMemoryRequest;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface ClusterNetworking {
  /**
  * amazon_vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#amazon_vpc Cluster#amazon_vpc}
  */
  readonly amazonVpc?: ClusterNetworkingAmazonVpc;
  /**
  * calico block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#calico Cluster#calico}
  */
  readonly calico?: ClusterNetworkingCalico;
  /**
  * canal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#canal Cluster#canal}
  */
  readonly canal?: ClusterNetworkingCanal;
  /**
  * cilium block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#cilium Cluster#cilium}
  */
  readonly cilium?: ClusterNetworkingCilium;
  /**
  * classic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#classic Cluster#classic}
  */
  readonly classic?: ClusterNetworkingClassic;
  /**
  * cni block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#cni Cluster#cni}
  */
  readonly cni?: ClusterNetworkingCni;
  /**
  * external block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#external Cluster#external}
  */
  readonly external?: ClusterNetworkingExternal;
  /**
  * flannel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#flannel Cluster#flannel}
  */
  readonly flannel?: ClusterNetworkingFlannel;
  /**
  * gce block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#gce Cluster#gce}
  */
  readonly gce?: ClusterNetworkingGce;
  /**
  * kopeio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#kopeio Cluster#kopeio}
  */
  readonly kopeio?: ClusterNetworkingKopeio;
  /**
  * kubenet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#kubenet Cluster#kubenet}
  */
  readonly kubenet?: ClusterNetworkingKubenet;
  /**
  * kuberouter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#kuberouter Cluster#kuberouter}
  */
  readonly kuberouter?: ClusterNetworkingKuberouter;
  /**
  * lyft_vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#lyft_vpc Cluster#lyft_vpc}
  */
  readonly lyftVpc?: ClusterNetworkingLyftVpc;
  /**
  * romana block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#romana Cluster#romana}
  */
  readonly romana?: ClusterNetworkingRomana;
  /**
  * weave block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#weave Cluster#weave}
  */
  readonly weave?: ClusterNetworkingWeave;
}

export function clusterNetworkingToTerraform(struct?: ClusterNetworkingOutputReference | ClusterNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_vpc: clusterNetworkingAmazonVpcToTerraform(struct!.amazonVpc),
    calico: clusterNetworkingCalicoToTerraform(struct!.calico),
    canal: clusterNetworkingCanalToTerraform(struct!.canal),
    cilium: clusterNetworkingCiliumToTerraform(struct!.cilium),
    classic: clusterNetworkingClassicToTerraform(struct!.classic),
    cni: clusterNetworkingCniToTerraform(struct!.cni),
    external: clusterNetworkingExternalToTerraform(struct!.external),
    flannel: clusterNetworkingFlannelToTerraform(struct!.flannel),
    gce: clusterNetworkingGceToTerraform(struct!.gce),
    kopeio: clusterNetworkingKopeioToTerraform(struct!.kopeio),
    kubenet: clusterNetworkingKubenetToTerraform(struct!.kubenet),
    kuberouter: clusterNetworkingKuberouterToTerraform(struct!.kuberouter),
    lyft_vpc: clusterNetworkingLyftVpcToTerraform(struct!.lyftVpc),
    romana: clusterNetworkingRomanaToTerraform(struct!.romana),
    weave: clusterNetworkingWeaveToTerraform(struct!.weave),
  }
}


export function clusterNetworkingToHclTerraform(struct?: ClusterNetworkingOutputReference | ClusterNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon_vpc: {
      value: clusterNetworkingAmazonVpcToHclTerraform(struct!.amazonVpc),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNetworkingAmazonVpcList",
    },
    calico: {
      value: clusterNetworkingCalicoToHclTerraform(struct!.calico),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNetworkingCalicoList",
    },
    canal: {
      value: clusterNetworkingCanalToHclTerraform(struct!.canal),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNetworkingCanalList",
    },
    cilium: {
      value: clusterNetworkingCiliumToHclTerraform(struct!.cilium),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNetworkingCiliumList",
    },
    classic: {
      value: clusterNetworkingClassicToHclTerraform(struct!.classic),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNetworkingClassicList",
    },
    cni: {
      value: clusterNetworkingCniToHclTerraform(struct!.cni),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNetworkingCniList",
    },
    external: {
      value: clusterNetworkingExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNetworkingExternalList",
    },
    flannel: {
      value: clusterNetworkingFlannelToHclTerraform(struct!.flannel),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNetworkingFlannelList",
    },
    gce: {
      value: clusterNetworkingGceToHclTerraform(struct!.gce),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNetworkingGceList",
    },
    kopeio: {
      value: clusterNetworkingKopeioToHclTerraform(struct!.kopeio),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNetworkingKopeioList",
    },
    kubenet: {
      value: clusterNetworkingKubenetToHclTerraform(struct!.kubenet),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNetworkingKubenetList",
    },
    kuberouter: {
      value: clusterNetworkingKuberouterToHclTerraform(struct!.kuberouter),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNetworkingKuberouterList",
    },
    lyft_vpc: {
      value: clusterNetworkingLyftVpcToHclTerraform(struct!.lyftVpc),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNetworkingLyftVpcList",
    },
    romana: {
      value: clusterNetworkingRomanaToHclTerraform(struct!.romana),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNetworkingRomanaList",
    },
    weave: {
      value: clusterNetworkingWeaveToHclTerraform(struct!.weave),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNetworkingWeaveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterNetworking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonVpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonVpc = this._amazonVpc?.internalValue;
    }
    if (this._calico?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calico = this._calico?.internalValue;
    }
    if (this._canal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canal = this._canal?.internalValue;
    }
    if (this._cilium?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cilium = this._cilium?.internalValue;
    }
    if (this._classic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classic = this._classic?.internalValue;
    }
    if (this._cni?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cni = this._cni?.internalValue;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._flannel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flannel = this._flannel?.internalValue;
    }
    if (this._gce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gce = this._gce?.internalValue;
    }
    if (this._kopeio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kopeio = this._kopeio?.internalValue;
    }
    if (this._kubenet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubenet = this._kubenet?.internalValue;
    }
    if (this._kuberouter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kuberouter = this._kuberouter?.internalValue;
    }
    if (this._lyftVpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lyftVpc = this._lyftVpc?.internalValue;
    }
    if (this._romana?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.romana = this._romana?.internalValue;
    }
    if (this._weave?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weave = this._weave?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNetworking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amazonVpc.internalValue = undefined;
      this._calico.internalValue = undefined;
      this._canal.internalValue = undefined;
      this._cilium.internalValue = undefined;
      this._classic.internalValue = undefined;
      this._cni.internalValue = undefined;
      this._external.internalValue = undefined;
      this._flannel.internalValue = undefined;
      this._gce.internalValue = undefined;
      this._kopeio.internalValue = undefined;
      this._kubenet.internalValue = undefined;
      this._kuberouter.internalValue = undefined;
      this._lyftVpc.internalValue = undefined;
      this._romana.internalValue = undefined;
      this._weave.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amazonVpc.internalValue = value.amazonVpc;
      this._calico.internalValue = value.calico;
      this._canal.internalValue = value.canal;
      this._cilium.internalValue = value.cilium;
      this._classic.internalValue = value.classic;
      this._cni.internalValue = value.cni;
      this._external.internalValue = value.external;
      this._flannel.internalValue = value.flannel;
      this._gce.internalValue = value.gce;
      this._kopeio.internalValue = value.kopeio;
      this._kubenet.internalValue = value.kubenet;
      this._kuberouter.internalValue = value.kuberouter;
      this._lyftVpc.internalValue = value.lyftVpc;
      this._romana.internalValue = value.romana;
      this._weave.internalValue = value.weave;
    }
  }

  // amazon_vpc - computed: false, optional: true, required: false
  private _amazonVpc = new ClusterNetworkingAmazonVpcOutputReference(this, "amazon_vpc");
  public get amazonVpc() {
    return this._amazonVpc;
  }
  public putAmazonVpc(value: ClusterNetworkingAmazonVpc) {
    this._amazonVpc.internalValue = value;
  }
  public resetAmazonVpc() {
    this._amazonVpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonVpcInput() {
    return this._amazonVpc.internalValue;
  }

  // calico - computed: false, optional: true, required: false
  private _calico = new ClusterNetworkingCalicoOutputReference(this, "calico");
  public get calico() {
    return this._calico;
  }
  public putCalico(value: ClusterNetworkingCalico) {
    this._calico.internalValue = value;
  }
  public resetCalico() {
    this._calico.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calicoInput() {
    return this._calico.internalValue;
  }

  // canal - computed: false, optional: true, required: false
  private _canal = new ClusterNetworkingCanalOutputReference(this, "canal");
  public get canal() {
    return this._canal;
  }
  public putCanal(value: ClusterNetworkingCanal) {
    this._canal.internalValue = value;
  }
  public resetCanal() {
    this._canal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canalInput() {
    return this._canal.internalValue;
  }

  // cilium - computed: false, optional: true, required: false
  private _cilium = new ClusterNetworkingCiliumOutputReference(this, "cilium");
  public get cilium() {
    return this._cilium;
  }
  public putCilium(value: ClusterNetworkingCilium) {
    this._cilium.internalValue = value;
  }
  public resetCilium() {
    this._cilium.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciliumInput() {
    return this._cilium.internalValue;
  }

  // classic - computed: false, optional: true, required: false
  private _classic = new ClusterNetworkingClassicOutputReference(this, "classic");
  public get classic() {
    return this._classic;
  }
  public putClassic(value: ClusterNetworkingClassic) {
    this._classic.internalValue = value;
  }
  public resetClassic() {
    this._classic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classicInput() {
    return this._classic.internalValue;
  }

  // cni - computed: false, optional: true, required: false
  private _cni = new ClusterNetworkingCniOutputReference(this, "cni");
  public get cni() {
    return this._cni;
  }
  public putCni(value: ClusterNetworkingCni) {
    this._cni.internalValue = value;
  }
  public resetCni() {
    this._cni.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cniInput() {
    return this._cni.internalValue;
  }

  // external - computed: false, optional: true, required: false
  private _external = new ClusterNetworkingExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: ClusterNetworkingExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // flannel - computed: false, optional: true, required: false
  private _flannel = new ClusterNetworkingFlannelOutputReference(this, "flannel");
  public get flannel() {
    return this._flannel;
  }
  public putFlannel(value: ClusterNetworkingFlannel) {
    this._flannel.internalValue = value;
  }
  public resetFlannel() {
    this._flannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flannelInput() {
    return this._flannel.internalValue;
  }

  // gce - computed: false, optional: true, required: false
  private _gce = new ClusterNetworkingGceOutputReference(this, "gce");
  public get gce() {
    return this._gce;
  }
  public putGce(value: ClusterNetworkingGce) {
    this._gce.internalValue = value;
  }
  public resetGce() {
    this._gce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gceInput() {
    return this._gce.internalValue;
  }

  // kopeio - computed: false, optional: true, required: false
  private _kopeio = new ClusterNetworkingKopeioOutputReference(this, "kopeio");
  public get kopeio() {
    return this._kopeio;
  }
  public putKopeio(value: ClusterNetworkingKopeio) {
    this._kopeio.internalValue = value;
  }
  public resetKopeio() {
    this._kopeio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kopeioInput() {
    return this._kopeio.internalValue;
  }

  // kubenet - computed: false, optional: true, required: false
  private _kubenet = new ClusterNetworkingKubenetOutputReference(this, "kubenet");
  public get kubenet() {
    return this._kubenet;
  }
  public putKubenet(value: ClusterNetworkingKubenet) {
    this._kubenet.internalValue = value;
  }
  public resetKubenet() {
    this._kubenet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubenetInput() {
    return this._kubenet.internalValue;
  }

  // kuberouter - computed: false, optional: true, required: false
  private _kuberouter = new ClusterNetworkingKuberouterOutputReference(this, "kuberouter");
  public get kuberouter() {
    return this._kuberouter;
  }
  public putKuberouter(value: ClusterNetworkingKuberouter) {
    this._kuberouter.internalValue = value;
  }
  public resetKuberouter() {
    this._kuberouter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kuberouterInput() {
    return this._kuberouter.internalValue;
  }

  // lyft_vpc - computed: false, optional: true, required: false
  private _lyftVpc = new ClusterNetworkingLyftVpcOutputReference(this, "lyft_vpc");
  public get lyftVpc() {
    return this._lyftVpc;
  }
  public putLyftVpc(value: ClusterNetworkingLyftVpc) {
    this._lyftVpc.internalValue = value;
  }
  public resetLyftVpc() {
    this._lyftVpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lyftVpcInput() {
    return this._lyftVpc.internalValue;
  }

  // romana - computed: false, optional: true, required: false
  private _romana = new ClusterNetworkingRomanaOutputReference(this, "romana");
  public get romana() {
    return this._romana;
  }
  public putRomana(value: ClusterNetworkingRomana) {
    this._romana.internalValue = value;
  }
  public resetRomana() {
    this._romana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get romanaInput() {
    return this._romana.internalValue;
  }

  // weave - computed: false, optional: true, required: false
  private _weave = new ClusterNetworkingWeaveOutputReference(this, "weave");
  public get weave() {
    return this._weave;
  }
  public putWeave(value: ClusterNetworkingWeave) {
    this._weave.internalValue = value;
  }
  public resetWeave() {
    this._weave.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weaveInput() {
    return this._weave.internalValue;
  }
}
export interface ClusterNodeAuthorizationNodeAuthorizer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#authorizer Cluster#authorizer}
  */
  readonly authorizer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#features Cluster#features}
  */
  readonly features?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#image Cluster#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#interval Cluster#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#node_url Cluster#node_url}
  */
  readonly nodeUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#port Cluster#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#timeout Cluster#timeout}
  */
  readonly timeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#token_ttl Cluster#token_ttl}
  */
  readonly tokenTtl?: string;
}

export function clusterNodeAuthorizationNodeAuthorizerToTerraform(struct?: ClusterNodeAuthorizationNodeAuthorizerOutputReference | ClusterNodeAuthorizationNodeAuthorizer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorizer: cdktf.stringToTerraform(struct!.authorizer),
    features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.features),
    image: cdktf.stringToTerraform(struct!.image),
    interval: cdktf.stringToTerraform(struct!.interval),
    node_url: cdktf.stringToTerraform(struct!.nodeUrl),
    port: cdktf.numberToTerraform(struct!.port),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    token_ttl: cdktf.stringToTerraform(struct!.tokenTtl),
  }
}


export function clusterNodeAuthorizationNodeAuthorizerToHclTerraform(struct?: ClusterNodeAuthorizationNodeAuthorizerOutputReference | ClusterNodeAuthorizationNodeAuthorizer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorizer: {
      value: cdktf.stringToHclTerraform(struct!.authorizer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.features),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_url: {
      value: cdktf.stringToHclTerraform(struct!.nodeUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_ttl: {
      value: cdktf.stringToHclTerraform(struct!.tokenTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterNodeAuthorizationNodeAuthorizerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterNodeAuthorizationNodeAuthorizer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizer !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizer = this._authorizer;
    }
    if (this._features !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._nodeUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeUrl = this._nodeUrl;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tokenTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenTtl = this._tokenTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNodeAuthorizationNodeAuthorizer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizer = undefined;
      this._features = undefined;
      this._image = undefined;
      this._interval = undefined;
      this._nodeUrl = undefined;
      this._port = undefined;
      this._timeout = undefined;
      this._tokenTtl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizer = value.authorizer;
      this._features = value.features;
      this._image = value.image;
      this._interval = value.interval;
      this._nodeUrl = value.nodeUrl;
      this._port = value.port;
      this._timeout = value.timeout;
      this._tokenTtl = value.tokenTtl;
    }
  }

  // authorizer - computed: false, optional: true, required: false
  private _authorizer?: string; 
  public get authorizer() {
    return this.getStringAttribute('authorizer');
  }
  public set authorizer(value: string) {
    this._authorizer = value;
  }
  public resetAuthorizer() {
    this._authorizer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerInput() {
    return this._authorizer;
  }

  // features - computed: false, optional: true, required: false
  private _features?: string[]; 
  public get features() {
    return this.getListAttribute('features');
  }
  public set features(value: string[]) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // node_url - computed: false, optional: true, required: false
  private _nodeUrl?: string; 
  public get nodeUrl() {
    return this.getStringAttribute('node_url');
  }
  public set nodeUrl(value: string) {
    this._nodeUrl = value;
  }
  public resetNodeUrl() {
    this._nodeUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeUrlInput() {
    return this._nodeUrl;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // token_ttl - computed: false, optional: true, required: false
  private _tokenTtl?: string; 
  public get tokenTtl() {
    return this.getStringAttribute('token_ttl');
  }
  public set tokenTtl(value: string) {
    this._tokenTtl = value;
  }
  public resetTokenTtl() {
    this._tokenTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTtlInput() {
    return this._tokenTtl;
  }
}
export interface ClusterNodeAuthorization {
  /**
  * node_authorizer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#node_authorizer Cluster#node_authorizer}
  */
  readonly nodeAuthorizer?: ClusterNodeAuthorizationNodeAuthorizer;
}

export function clusterNodeAuthorizationToTerraform(struct?: ClusterNodeAuthorizationOutputReference | ClusterNodeAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_authorizer: clusterNodeAuthorizationNodeAuthorizerToTerraform(struct!.nodeAuthorizer),
  }
}


export function clusterNodeAuthorizationToHclTerraform(struct?: ClusterNodeAuthorizationOutputReference | ClusterNodeAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_authorizer: {
      value: clusterNodeAuthorizationNodeAuthorizerToHclTerraform(struct!.nodeAuthorizer),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterNodeAuthorizationNodeAuthorizerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterNodeAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterNodeAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAuthorizer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAuthorizer = this._nodeAuthorizer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNodeAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeAuthorizer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeAuthorizer.internalValue = value.nodeAuthorizer;
    }
  }

  // node_authorizer - computed: false, optional: true, required: false
  private _nodeAuthorizer = new ClusterNodeAuthorizationNodeAuthorizerOutputReference(this, "node_authorizer");
  public get nodeAuthorizer() {
    return this._nodeAuthorizer;
  }
  public putNodeAuthorizer(value: ClusterNodeAuthorizationNodeAuthorizer) {
    this._nodeAuthorizer.internalValue = value;
  }
  public resetNodeAuthorizer() {
    this._nodeAuthorizer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAuthorizerInput() {
    return this._nodeAuthorizer.internalValue;
  }
}
export interface ClusterNodeProblemDetector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#cpu_limit Cluster#cpu_limit}
  */
  readonly cpuLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#cpu_request Cluster#cpu_request}
  */
  readonly cpuRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#enabled Cluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#image Cluster#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#memory_limit Cluster#memory_limit}
  */
  readonly memoryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#memory_request Cluster#memory_request}
  */
  readonly memoryRequest?: string;
}

export function clusterNodeProblemDetectorToTerraform(struct?: ClusterNodeProblemDetectorOutputReference | ClusterNodeProblemDetector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_limit: cdktf.stringToTerraform(struct!.cpuLimit),
    cpu_request: cdktf.stringToTerraform(struct!.cpuRequest),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    image: cdktf.stringToTerraform(struct!.image),
    memory_limit: cdktf.stringToTerraform(struct!.memoryLimit),
    memory_request: cdktf.stringToTerraform(struct!.memoryRequest),
  }
}


export function clusterNodeProblemDetectorToHclTerraform(struct?: ClusterNodeProblemDetectorOutputReference | ClusterNodeProblemDetector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_limit: {
      value: cdktf.stringToHclTerraform(struct!.cpuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_request: {
      value: cdktf.stringToHclTerraform(struct!.cpuRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.memoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_request: {
      value: cdktf.stringToHclTerraform(struct!.memoryRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterNodeProblemDetectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterNodeProblemDetector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimit = this._cpuLimit;
    }
    if (this._cpuRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuRequest = this._cpuRequest;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._memoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimit = this._memoryLimit;
    }
    if (this._memoryRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryRequest = this._memoryRequest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNodeProblemDetector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuLimit = undefined;
      this._cpuRequest = undefined;
      this._enabled = undefined;
      this._image = undefined;
      this._memoryLimit = undefined;
      this._memoryRequest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuLimit = value.cpuLimit;
      this._cpuRequest = value.cpuRequest;
      this._enabled = value.enabled;
      this._image = value.image;
      this._memoryLimit = value.memoryLimit;
      this._memoryRequest = value.memoryRequest;
    }
  }

  // cpu_limit - computed: false, optional: true, required: false
  private _cpuLimit?: string; 
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }
  public set cpuLimit(value: string) {
    this._cpuLimit = value;
  }
  public resetCpuLimit() {
    this._cpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitInput() {
    return this._cpuLimit;
  }

  // cpu_request - computed: false, optional: true, required: false
  private _cpuRequest?: string; 
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }
  public set cpuRequest(value: string) {
    this._cpuRequest = value;
  }
  public resetCpuRequest() {
    this._cpuRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuRequestInput() {
    return this._cpuRequest;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // memory_limit - computed: false, optional: true, required: false
  private _memoryLimit?: string; 
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }
  public set memoryLimit(value: string) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }

  // memory_request - computed: false, optional: true, required: false
  private _memoryRequest?: string; 
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
  public set memoryRequest(value: string) {
    this._memoryRequest = value;
  }
  public resetMemoryRequest() {
    this._memoryRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRequestInput() {
    return this._memoryRequest;
  }
}
export interface ClusterNodeTerminationHandler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#cpu_request Cluster#cpu_request}
  */
  readonly cpuRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#enable_prometheus_metrics Cluster#enable_prometheus_metrics}
  */
  readonly enablePrometheusMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#enable_rebalance_draining Cluster#enable_rebalance_draining}
  */
  readonly enableRebalanceDraining?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#enable_rebalance_monitoring Cluster#enable_rebalance_monitoring}
  */
  readonly enableRebalanceMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#enable_scheduled_event_draining Cluster#enable_scheduled_event_draining}
  */
  readonly enableScheduledEventDraining?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#enable_spot_interruption_draining Cluster#enable_spot_interruption_draining}
  */
  readonly enableSpotInterruptionDraining: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#enable_sqs_termination_draining Cluster#enable_sqs_termination_draining}
  */
  readonly enableSqsTerminationDraining?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#enabled Cluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#exclude_from_load_balancers Cluster#exclude_from_load_balancers}
  */
  readonly excludeFromLoadBalancers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#managed_asg_tag Cluster#managed_asg_tag}
  */
  readonly managedAsgTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#memory_request Cluster#memory_request}
  */
  readonly memoryRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#version Cluster#version}
  */
  readonly version?: string;
}

export function clusterNodeTerminationHandlerToTerraform(struct?: ClusterNodeTerminationHandlerOutputReference | ClusterNodeTerminationHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_request: cdktf.stringToTerraform(struct!.cpuRequest),
    enable_prometheus_metrics: cdktf.booleanToTerraform(struct!.enablePrometheusMetrics),
    enable_rebalance_draining: cdktf.booleanToTerraform(struct!.enableRebalanceDraining),
    enable_rebalance_monitoring: cdktf.booleanToTerraform(struct!.enableRebalanceMonitoring),
    enable_scheduled_event_draining: cdktf.booleanToTerraform(struct!.enableScheduledEventDraining),
    enable_spot_interruption_draining: cdktf.booleanToTerraform(struct!.enableSpotInterruptionDraining),
    enable_sqs_termination_draining: cdktf.booleanToTerraform(struct!.enableSqsTerminationDraining),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exclude_from_load_balancers: cdktf.booleanToTerraform(struct!.excludeFromLoadBalancers),
    managed_asg_tag: cdktf.stringToTerraform(struct!.managedAsgTag),
    memory_request: cdktf.stringToTerraform(struct!.memoryRequest),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function clusterNodeTerminationHandlerToHclTerraform(struct?: ClusterNodeTerminationHandlerOutputReference | ClusterNodeTerminationHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_request: {
      value: cdktf.stringToHclTerraform(struct!.cpuRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_prometheus_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrometheusMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_rebalance_draining: {
      value: cdktf.booleanToHclTerraform(struct!.enableRebalanceDraining),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_rebalance_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableRebalanceMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_scheduled_event_draining: {
      value: cdktf.booleanToHclTerraform(struct!.enableScheduledEventDraining),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_spot_interruption_draining: {
      value: cdktf.booleanToHclTerraform(struct!.enableSpotInterruptionDraining),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_sqs_termination_draining: {
      value: cdktf.booleanToHclTerraform(struct!.enableSqsTerminationDraining),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_from_load_balancers: {
      value: cdktf.booleanToHclTerraform(struct!.excludeFromLoadBalancers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    managed_asg_tag: {
      value: cdktf.stringToHclTerraform(struct!.managedAsgTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_request: {
      value: cdktf.stringToHclTerraform(struct!.memoryRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterNodeTerminationHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterNodeTerminationHandler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuRequest = this._cpuRequest;
    }
    if (this._enablePrometheusMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrometheusMetrics = this._enablePrometheusMetrics;
    }
    if (this._enableRebalanceDraining !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRebalanceDraining = this._enableRebalanceDraining;
    }
    if (this._enableRebalanceMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRebalanceMonitoring = this._enableRebalanceMonitoring;
    }
    if (this._enableScheduledEventDraining !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableScheduledEventDraining = this._enableScheduledEventDraining;
    }
    if (this._enableSpotInterruptionDraining !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSpotInterruptionDraining = this._enableSpotInterruptionDraining;
    }
    if (this._enableSqsTerminationDraining !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSqsTerminationDraining = this._enableSqsTerminationDraining;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._excludeFromLoadBalancers !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFromLoadBalancers = this._excludeFromLoadBalancers;
    }
    if (this._managedAsgTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedAsgTag = this._managedAsgTag;
    }
    if (this._memoryRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryRequest = this._memoryRequest;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNodeTerminationHandler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuRequest = undefined;
      this._enablePrometheusMetrics = undefined;
      this._enableRebalanceDraining = undefined;
      this._enableRebalanceMonitoring = undefined;
      this._enableScheduledEventDraining = undefined;
      this._enableSpotInterruptionDraining = undefined;
      this._enableSqsTerminationDraining = undefined;
      this._enabled = undefined;
      this._excludeFromLoadBalancers = undefined;
      this._managedAsgTag = undefined;
      this._memoryRequest = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuRequest = value.cpuRequest;
      this._enablePrometheusMetrics = value.enablePrometheusMetrics;
      this._enableRebalanceDraining = value.enableRebalanceDraining;
      this._enableRebalanceMonitoring = value.enableRebalanceMonitoring;
      this._enableScheduledEventDraining = value.enableScheduledEventDraining;
      this._enableSpotInterruptionDraining = value.enableSpotInterruptionDraining;
      this._enableSqsTerminationDraining = value.enableSqsTerminationDraining;
      this._enabled = value.enabled;
      this._excludeFromLoadBalancers = value.excludeFromLoadBalancers;
      this._managedAsgTag = value.managedAsgTag;
      this._memoryRequest = value.memoryRequest;
      this._version = value.version;
    }
  }

  // cpu_request - computed: false, optional: true, required: false
  private _cpuRequest?: string; 
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }
  public set cpuRequest(value: string) {
    this._cpuRequest = value;
  }
  public resetCpuRequest() {
    this._cpuRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuRequestInput() {
    return this._cpuRequest;
  }

  // enable_prometheus_metrics - computed: false, optional: true, required: false
  private _enablePrometheusMetrics?: boolean | cdktf.IResolvable; 
  public get enablePrometheusMetrics() {
    return this.getBooleanAttribute('enable_prometheus_metrics');
  }
  public set enablePrometheusMetrics(value: boolean | cdktf.IResolvable) {
    this._enablePrometheusMetrics = value;
  }
  public resetEnablePrometheusMetrics() {
    this._enablePrometheusMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrometheusMetricsInput() {
    return this._enablePrometheusMetrics;
  }

  // enable_rebalance_draining - computed: false, optional: true, required: false
  private _enableRebalanceDraining?: boolean | cdktf.IResolvable; 
  public get enableRebalanceDraining() {
    return this.getBooleanAttribute('enable_rebalance_draining');
  }
  public set enableRebalanceDraining(value: boolean | cdktf.IResolvable) {
    this._enableRebalanceDraining = value;
  }
  public resetEnableRebalanceDraining() {
    this._enableRebalanceDraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRebalanceDrainingInput() {
    return this._enableRebalanceDraining;
  }

  // enable_rebalance_monitoring - computed: false, optional: true, required: false
  private _enableRebalanceMonitoring?: boolean | cdktf.IResolvable; 
  public get enableRebalanceMonitoring() {
    return this.getBooleanAttribute('enable_rebalance_monitoring');
  }
  public set enableRebalanceMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableRebalanceMonitoring = value;
  }
  public resetEnableRebalanceMonitoring() {
    this._enableRebalanceMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRebalanceMonitoringInput() {
    return this._enableRebalanceMonitoring;
  }

  // enable_scheduled_event_draining - computed: false, optional: true, required: false
  private _enableScheduledEventDraining?: boolean | cdktf.IResolvable; 
  public get enableScheduledEventDraining() {
    return this.getBooleanAttribute('enable_scheduled_event_draining');
  }
  public set enableScheduledEventDraining(value: boolean | cdktf.IResolvable) {
    this._enableScheduledEventDraining = value;
  }
  public resetEnableScheduledEventDraining() {
    this._enableScheduledEventDraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableScheduledEventDrainingInput() {
    return this._enableScheduledEventDraining;
  }

  // enable_spot_interruption_draining - computed: false, optional: false, required: true
  private _enableSpotInterruptionDraining?: boolean | cdktf.IResolvable; 
  public get enableSpotInterruptionDraining() {
    return this.getBooleanAttribute('enable_spot_interruption_draining');
  }
  public set enableSpotInterruptionDraining(value: boolean | cdktf.IResolvable) {
    this._enableSpotInterruptionDraining = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSpotInterruptionDrainingInput() {
    return this._enableSpotInterruptionDraining;
  }

  // enable_sqs_termination_draining - computed: false, optional: true, required: false
  private _enableSqsTerminationDraining?: boolean | cdktf.IResolvable; 
  public get enableSqsTerminationDraining() {
    return this.getBooleanAttribute('enable_sqs_termination_draining');
  }
  public set enableSqsTerminationDraining(value: boolean | cdktf.IResolvable) {
    this._enableSqsTerminationDraining = value;
  }
  public resetEnableSqsTerminationDraining() {
    this._enableSqsTerminationDraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSqsTerminationDrainingInput() {
    return this._enableSqsTerminationDraining;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exclude_from_load_balancers - computed: false, optional: true, required: false
  private _excludeFromLoadBalancers?: boolean | cdktf.IResolvable; 
  public get excludeFromLoadBalancers() {
    return this.getBooleanAttribute('exclude_from_load_balancers');
  }
  public set excludeFromLoadBalancers(value: boolean | cdktf.IResolvable) {
    this._excludeFromLoadBalancers = value;
  }
  public resetExcludeFromLoadBalancers() {
    this._excludeFromLoadBalancers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFromLoadBalancersInput() {
    return this._excludeFromLoadBalancers;
  }

  // managed_asg_tag - computed: false, optional: true, required: false
  private _managedAsgTag?: string; 
  public get managedAsgTag() {
    return this.getStringAttribute('managed_asg_tag');
  }
  public set managedAsgTag(value: string) {
    this._managedAsgTag = value;
  }
  public resetManagedAsgTag() {
    this._managedAsgTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedAsgTagInput() {
    return this._managedAsgTag;
  }

  // memory_request - computed: false, optional: true, required: false
  private _memoryRequest?: string; 
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
  public set memoryRequest(value: string) {
    this._memoryRequest = value;
  }
  public resetMemoryRequest() {
    this._memoryRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRequestInput() {
    return this._memoryRequest;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface ClusterNtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#managed Cluster#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
}

export function clusterNtpToTerraform(struct?: ClusterNtpOutputReference | ClusterNtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed: cdktf.booleanToTerraform(struct!.managed),
  }
}


export function clusterNtpToHclTerraform(struct?: ClusterNtpOutputReference | ClusterNtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed: {
      value: cdktf.booleanToHclTerraform(struct!.managed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterNtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterNtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managed !== undefined) {
      hasAnyValues = true;
      internalValueResult.managed = this._managed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managed = value.managed;
    }
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: boolean | cdktf.IResolvable; 
  public get managed() {
    return this.getBooleanAttribute('managed');
  }
  public set managed(value: boolean | cdktf.IResolvable) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }
}
export interface ClusterPodIdentityWebhook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#enabled Cluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#replicas Cluster#replicas}
  */
  readonly replicas?: number;
}

export function clusterPodIdentityWebhookToTerraform(struct?: ClusterPodIdentityWebhookOutputReference | ClusterPodIdentityWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function clusterPodIdentityWebhookToHclTerraform(struct?: ClusterPodIdentityWebhookOutputReference | ClusterPodIdentityWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterPodIdentityWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterPodIdentityWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterPodIdentityWebhook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._replicas = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._replicas = value.replicas;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }
}
export interface ClusterRollingUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#drain_and_terminate Cluster#drain_and_terminate}
  */
  readonly drainAndTerminate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#max_surge Cluster#max_surge}
  */
  readonly maxSurge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#max_unavailable Cluster#max_unavailable}
  */
  readonly maxUnavailable?: string;
}

export function clusterRollingUpdateToTerraform(struct?: ClusterRollingUpdateOutputReference | ClusterRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drain_and_terminate: cdktf.booleanToTerraform(struct!.drainAndTerminate),
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
  }
}


export function clusterRollingUpdateToHclTerraform(struct?: ClusterRollingUpdateOutputReference | ClusterRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drain_and_terminate: {
      value: cdktf.booleanToHclTerraform(struct!.drainAndTerminate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_surge: {
      value: cdktf.stringToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterRollingUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drainAndTerminate !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainAndTerminate = this._drainAndTerminate;
    }
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRollingUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drainAndTerminate = undefined;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drainAndTerminate = value.drainAndTerminate;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // drain_and_terminate - computed: false, optional: true, required: false
  private _drainAndTerminate?: boolean | cdktf.IResolvable; 
  public get drainAndTerminate() {
    return this.getBooleanAttribute('drain_and_terminate');
  }
  public set drainAndTerminate(value: boolean | cdktf.IResolvable) {
    this._drainAndTerminate = value;
  }
  public resetDrainAndTerminate() {
    this._drainAndTerminate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainAndTerminateInput() {
    return this._drainAndTerminate;
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: string; 
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }
  public set maxSurge(value: string) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface ClusterSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#cluster_ca_cert Cluster#cluster_ca_cert}
  */
  readonly clusterCaCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#cluster_ca_key Cluster#cluster_ca_key}
  */
  readonly clusterCaKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#docker_config Cluster#docker_config}
  */
  readonly dockerConfig?: string;
}

export function clusterSecretsToTerraform(struct?: ClusterSecretsOutputReference | ClusterSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_ca_cert: cdktf.stringToTerraform(struct!.clusterCaCert),
    cluster_ca_key: cdktf.stringToTerraform(struct!.clusterCaKey),
    docker_config: cdktf.stringToTerraform(struct!.dockerConfig),
  }
}


export function clusterSecretsToHclTerraform(struct?: ClusterSecretsOutputReference | ClusterSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.clusterCaCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_ca_key: {
      value: cdktf.stringToHclTerraform(struct!.clusterCaKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_config: {
      value: cdktf.stringToHclTerraform(struct!.dockerConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSecretsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterCaCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCaCert = this._clusterCaCert;
    }
    if (this._clusterCaKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCaKey = this._clusterCaKey;
    }
    if (this._dockerConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerConfig = this._dockerConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterSecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterCaCert = undefined;
      this._clusterCaKey = undefined;
      this._dockerConfig = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterCaCert = value.clusterCaCert;
      this._clusterCaKey = value.clusterCaKey;
      this._dockerConfig = value.dockerConfig;
    }
  }

  // cluster_ca_cert - computed: true, optional: true, required: false
  private _clusterCaCert?: string; 
  public get clusterCaCert() {
    return this.getStringAttribute('cluster_ca_cert');
  }
  public set clusterCaCert(value: string) {
    this._clusterCaCert = value;
  }
  public resetClusterCaCert() {
    this._clusterCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCaCertInput() {
    return this._clusterCaCert;
  }

  // cluster_ca_key - computed: true, optional: true, required: false
  private _clusterCaKey?: string; 
  public get clusterCaKey() {
    return this.getStringAttribute('cluster_ca_key');
  }
  public set clusterCaKey(value: string) {
    this._clusterCaKey = value;
  }
  public resetClusterCaKey() {
    this._clusterCaKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCaKeyInput() {
    return this._clusterCaKey;
  }

  // docker_config - computed: false, optional: true, required: false
  private _dockerConfig?: string; 
  public get dockerConfig() {
    return this.getStringAttribute('docker_config');
  }
  public set dockerConfig(value: string) {
    this._dockerConfig = value;
  }
  public resetDockerConfig() {
    this._dockerConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerConfigInput() {
    return this._dockerConfig;
  }
}
export interface ClusterServiceAccountIssuerDiscovery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#additional_audiences Cluster#additional_audiences}
  */
  readonly additionalAudiences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#discovery_store Cluster#discovery_store}
  */
  readonly discoveryStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#enable_aws_oidc_provider Cluster#enable_aws_oidc_provider}
  */
  readonly enableAwsOidcProvider?: boolean | cdktf.IResolvable;
}

export function clusterServiceAccountIssuerDiscoveryToTerraform(struct?: ClusterServiceAccountIssuerDiscoveryOutputReference | ClusterServiceAccountIssuerDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalAudiences),
    discovery_store: cdktf.stringToTerraform(struct!.discoveryStore),
    enable_aws_oidc_provider: cdktf.booleanToTerraform(struct!.enableAwsOidcProvider),
  }
}


export function clusterServiceAccountIssuerDiscoveryToHclTerraform(struct?: ClusterServiceAccountIssuerDiscoveryOutputReference | ClusterServiceAccountIssuerDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalAudiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    discovery_store: {
      value: cdktf.stringToHclTerraform(struct!.discoveryStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_aws_oidc_provider: {
      value: cdktf.booleanToHclTerraform(struct!.enableAwsOidcProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterServiceAccountIssuerDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterServiceAccountIssuerDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalAudiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalAudiences = this._additionalAudiences;
    }
    if (this._discoveryStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryStore = this._discoveryStore;
    }
    if (this._enableAwsOidcProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAwsOidcProvider = this._enableAwsOidcProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterServiceAccountIssuerDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalAudiences = undefined;
      this._discoveryStore = undefined;
      this._enableAwsOidcProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalAudiences = value.additionalAudiences;
      this._discoveryStore = value.discoveryStore;
      this._enableAwsOidcProvider = value.enableAwsOidcProvider;
    }
  }

  // additional_audiences - computed: false, optional: true, required: false
  private _additionalAudiences?: string[]; 
  public get additionalAudiences() {
    return this.getListAttribute('additional_audiences');
  }
  public set additionalAudiences(value: string[]) {
    this._additionalAudiences = value;
  }
  public resetAdditionalAudiences() {
    this._additionalAudiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAudiencesInput() {
    return this._additionalAudiences;
  }

  // discovery_store - computed: false, optional: true, required: false
  private _discoveryStore?: string; 
  public get discoveryStore() {
    return this.getStringAttribute('discovery_store');
  }
  public set discoveryStore(value: string) {
    this._discoveryStore = value;
  }
  public resetDiscoveryStore() {
    this._discoveryStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryStoreInput() {
    return this._discoveryStore;
  }

  // enable_aws_oidc_provider - computed: false, optional: true, required: false
  private _enableAwsOidcProvider?: boolean | cdktf.IResolvable; 
  public get enableAwsOidcProvider() {
    return this.getBooleanAttribute('enable_aws_oidc_provider');
  }
  public set enableAwsOidcProvider(value: boolean | cdktf.IResolvable) {
    this._enableAwsOidcProvider = value;
  }
  public resetEnableAwsOidcProvider() {
    this._enableAwsOidcProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAwsOidcProviderInput() {
    return this._enableAwsOidcProvider;
  }
}
export interface ClusterSnapshotController {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#enabled Cluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#install_default_class Cluster#install_default_class}
  */
  readonly installDefaultClass?: boolean | cdktf.IResolvable;
}

export function clusterSnapshotControllerToTerraform(struct?: ClusterSnapshotControllerOutputReference | ClusterSnapshotController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    install_default_class: cdktf.booleanToTerraform(struct!.installDefaultClass),
  }
}


export function clusterSnapshotControllerToHclTerraform(struct?: ClusterSnapshotControllerOutputReference | ClusterSnapshotController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    install_default_class: {
      value: cdktf.booleanToHclTerraform(struct!.installDefaultClass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSnapshotControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterSnapshotController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._installDefaultClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.installDefaultClass = this._installDefaultClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterSnapshotController | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._installDefaultClass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._installDefaultClass = value.installDefaultClass;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // install_default_class - computed: false, optional: true, required: false
  private _installDefaultClass?: boolean | cdktf.IResolvable; 
  public get installDefaultClass() {
    return this.getBooleanAttribute('install_default_class');
  }
  public set installDefaultClass(value: boolean | cdktf.IResolvable) {
    this._installDefaultClass = value;
  }
  public resetInstallDefaultClass() {
    this._installDefaultClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installDefaultClassInput() {
    return this._installDefaultClass;
  }
}
export interface ClusterSubnetAdditionalRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#cidr Cluster#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#target Cluster#target}
  */
  readonly target?: string;
}

export function clusterSubnetAdditionalRoutesToTerraform(struct?: ClusterSubnetAdditionalRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function clusterSubnetAdditionalRoutesToHclTerraform(struct?: ClusterSubnetAdditionalRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSubnetAdditionalRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSubnetAdditionalRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterSubnetAdditionalRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._target = value.target;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class ClusterSubnetAdditionalRoutesList extends cdktf.ComplexList {
  public internalValue? : ClusterSubnetAdditionalRoutes[] | cdktf.IResolvable

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
  public get(index: number): ClusterSubnetAdditionalRoutesOutputReference {
    return new ClusterSubnetAdditionalRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#cidr Cluster#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#egress Cluster#egress}
  */
  readonly egress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#ipv6_cidr Cluster#ipv6_cidr}
  */
  readonly ipv6Cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#provider_id Cluster#provider_id}
  */
  readonly providerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#public_ip Cluster#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#region Cluster#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#type Cluster#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#zone Cluster#zone}
  */
  readonly zone: string;
  /**
  * additional_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#additional_routes Cluster#additional_routes}
  */
  readonly additionalRoutes?: ClusterSubnetAdditionalRoutes[] | cdktf.IResolvable;
}

export function clusterSubnetToTerraform(struct?: ClusterSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    egress: cdktf.stringToTerraform(struct!.egress),
    ipv6_cidr: cdktf.stringToTerraform(struct!.ipv6Cidr),
    name: cdktf.stringToTerraform(struct!.name),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
    region: cdktf.stringToTerraform(struct!.region),
    type: cdktf.stringToTerraform(struct!.type),
    zone: cdktf.stringToTerraform(struct!.zone),
    additional_routes: cdktf.listMapper(clusterSubnetAdditionalRoutesToTerraform, true)(struct!.additionalRoutes),
  }
}


export function clusterSubnetToHclTerraform(struct?: ClusterSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress: {
      value: cdktf.stringToHclTerraform(struct!.egress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_cidr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip: {
      value: cdktf.stringToHclTerraform(struct!.publicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_routes: {
      value: cdktf.listMapperHcl(clusterSubnetAdditionalRoutesToHclTerraform, true)(struct!.additionalRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterSubnetAdditionalRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._egress !== undefined) {
      hasAnyValues = true;
      internalValueResult.egress = this._egress;
    }
    if (this._ipv6Cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Cidr = this._ipv6Cidr;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._additionalRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRoutes = this._additionalRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._egress = undefined;
      this._ipv6Cidr = undefined;
      this._name = undefined;
      this._providerId = undefined;
      this._publicIp = undefined;
      this._region = undefined;
      this._type = undefined;
      this._zone = undefined;
      this._additionalRoutes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._egress = value.egress;
      this._ipv6Cidr = value.ipv6Cidr;
      this._name = value.name;
      this._providerId = value.providerId;
      this._publicIp = value.publicIp;
      this._region = value.region;
      this._type = value.type;
      this._zone = value.zone;
      this._additionalRoutes.internalValue = value.additionalRoutes;
    }
  }

  // cidr - computed: true, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // egress - computed: false, optional: true, required: false
  private _egress?: string; 
  public get egress() {
    return this.getStringAttribute('egress');
  }
  public set egress(value: string) {
    this._egress = value;
  }
  public resetEgress() {
    this._egress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress;
  }

  // ipv6_cidr - computed: false, optional: true, required: false
  private _ipv6Cidr?: string; 
  public get ipv6Cidr() {
    return this.getStringAttribute('ipv6_cidr');
  }
  public set ipv6Cidr(value: string) {
    this._ipv6Cidr = value;
  }
  public resetIpv6Cidr() {
    this._ipv6Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrInput() {
    return this._ipv6Cidr;
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

  // provider_id - computed: false, optional: false, required: true
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // region - computed: false, optional: true, required: false
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // additional_routes - computed: false, optional: true, required: false
  private _additionalRoutes = new ClusterSubnetAdditionalRoutesList(this, "additional_routes", false);
  public get additionalRoutes() {
    return this._additionalRoutes;
  }
  public putAdditionalRoutes(value: ClusterSubnetAdditionalRoutes[] | cdktf.IResolvable) {
    this._additionalRoutes.internalValue = value;
  }
  public resetAdditionalRoutes() {
    this._additionalRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRoutesInput() {
    return this._additionalRoutes.internalValue;
  }
}

export class ClusterSubnetList extends cdktf.ComplexList {
  public internalValue? : ClusterSubnet[] | cdktf.IResolvable

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
  public get(index: number): ClusterSubnetOutputReference {
    return new ClusterSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTagSubnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#value Cluster#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function clusterTagSubnetsToTerraform(struct?: ClusterTagSubnetsOutputReference | ClusterTagSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function clusterTagSubnetsToHclTerraform(struct?: ClusterTagSubnetsOutputReference | ClusterTagSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTagSubnetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTagSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTagSubnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ClusterTopologyBastionLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#additional_security_groups Cluster#additional_security_groups}
  */
  readonly additionalSecurityGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#type Cluster#type}
  */
  readonly type?: string;
}

export function clusterTopologyBastionLoadBalancerToTerraform(struct?: ClusterTopologyBastionLoadBalancerOutputReference | ClusterTopologyBastionLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalSecurityGroups),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function clusterTopologyBastionLoadBalancerToHclTerraform(struct?: ClusterTopologyBastionLoadBalancerOutputReference | ClusterTopologyBastionLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalSecurityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTopologyBastionLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTopologyBastionLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalSecurityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalSecurityGroups = this._additionalSecurityGroups;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTopologyBastionLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalSecurityGroups = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalSecurityGroups = value.additionalSecurityGroups;
      this._type = value.type;
    }
  }

  // additional_security_groups - computed: false, optional: false, required: true
  private _additionalSecurityGroups?: string[]; 
  public get additionalSecurityGroups() {
    return this.getListAttribute('additional_security_groups');
  }
  public set additionalSecurityGroups(value: string[]) {
    this._additionalSecurityGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSecurityGroupsInput() {
    return this._additionalSecurityGroups;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ClusterTopologyBastion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#bastion_public_name Cluster#bastion_public_name}
  */
  readonly bastionPublicName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#idle_timeout_seconds Cluster#idle_timeout_seconds}
  */
  readonly idleTimeoutSeconds?: number;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#load_balancer Cluster#load_balancer}
  */
  readonly loadBalancer?: ClusterTopologyBastionLoadBalancer;
}

export function clusterTopologyBastionToTerraform(struct?: ClusterTopologyBastionOutputReference | ClusterTopologyBastion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bastion_public_name: cdktf.stringToTerraform(struct!.bastionPublicName),
    idle_timeout_seconds: cdktf.numberToTerraform(struct!.idleTimeoutSeconds),
    load_balancer: clusterTopologyBastionLoadBalancerToTerraform(struct!.loadBalancer),
  }
}


export function clusterTopologyBastionToHclTerraform(struct?: ClusterTopologyBastionOutputReference | ClusterTopologyBastion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bastion_public_name: {
      value: cdktf.stringToHclTerraform(struct!.bastionPublicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    load_balancer: {
      value: clusterTopologyBastionLoadBalancerToHclTerraform(struct!.loadBalancer),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTopologyBastionLoadBalancerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTopologyBastionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTopologyBastion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bastionPublicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bastionPublicName = this._bastionPublicName;
    }
    if (this._idleTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutSeconds = this._idleTimeoutSeconds;
    }
    if (this._loadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTopologyBastion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bastionPublicName = undefined;
      this._idleTimeoutSeconds = undefined;
      this._loadBalancer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bastionPublicName = value.bastionPublicName;
      this._idleTimeoutSeconds = value.idleTimeoutSeconds;
      this._loadBalancer.internalValue = value.loadBalancer;
    }
  }

  // bastion_public_name - computed: false, optional: false, required: true
  private _bastionPublicName?: string; 
  public get bastionPublicName() {
    return this.getStringAttribute('bastion_public_name');
  }
  public set bastionPublicName(value: string) {
    this._bastionPublicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionPublicNameInput() {
    return this._bastionPublicName;
  }

  // idle_timeout_seconds - computed: false, optional: true, required: false
  private _idleTimeoutSeconds?: number; 
  public get idleTimeoutSeconds() {
    return this.getNumberAttribute('idle_timeout_seconds');
  }
  public set idleTimeoutSeconds(value: number) {
    this._idleTimeoutSeconds = value;
  }
  public resetIdleTimeoutSeconds() {
    this._idleTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutSecondsInput() {
    return this._idleTimeoutSeconds;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new ClusterTopologyBastionLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: ClusterTopologyBastionLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }
}
export interface ClusterTopologyDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#type Cluster#type}
  */
  readonly type: string;
}

export function clusterTopologyDnsToTerraform(struct?: ClusterTopologyDnsOutputReference | ClusterTopologyDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function clusterTopologyDnsToHclTerraform(struct?: ClusterTopologyDnsOutputReference | ClusterTopologyDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTopologyDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTopologyDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTopologyDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ClusterTopology {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#masters Cluster#masters}
  */
  readonly masters: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#nodes Cluster#nodes}
  */
  readonly nodes: string;
  /**
  * bastion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#bastion Cluster#bastion}
  */
  readonly bastion?: ClusterTopologyBastion;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#dns Cluster#dns}
  */
  readonly dns: ClusterTopologyDns;
}

export function clusterTopologyToTerraform(struct?: ClusterTopologyOutputReference | ClusterTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    masters: cdktf.stringToTerraform(struct!.masters),
    nodes: cdktf.stringToTerraform(struct!.nodes),
    bastion: clusterTopologyBastionToTerraform(struct!.bastion),
    dns: clusterTopologyDnsToTerraform(struct!.dns),
  }
}


export function clusterTopologyToHclTerraform(struct?: ClusterTopologyOutputReference | ClusterTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    masters: {
      value: cdktf.stringToHclTerraform(struct!.masters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodes: {
      value: cdktf.stringToHclTerraform(struct!.nodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bastion: {
      value: clusterTopologyBastionToHclTerraform(struct!.bastion),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTopologyBastionList",
    },
    dns: {
      value: clusterTopologyDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTopologyDnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTopologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTopology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masters !== undefined) {
      hasAnyValues = true;
      internalValueResult.masters = this._masters;
    }
    if (this._nodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes;
    }
    if (this._bastion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bastion = this._bastion?.internalValue;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTopology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._masters = undefined;
      this._nodes = undefined;
      this._bastion.internalValue = undefined;
      this._dns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._masters = value.masters;
      this._nodes = value.nodes;
      this._bastion.internalValue = value.bastion;
      this._dns.internalValue = value.dns;
    }
  }

  // masters - computed: false, optional: false, required: true
  private _masters?: string; 
  public get masters() {
    return this.getStringAttribute('masters');
  }
  public set masters(value: string) {
    this._masters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mastersInput() {
    return this._masters;
  }

  // nodes - computed: false, optional: false, required: true
  private _nodes?: string; 
  public get nodes() {
    return this.getStringAttribute('nodes');
  }
  public set nodes(value: string) {
    this._nodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // bastion - computed: false, optional: true, required: false
  private _bastion = new ClusterTopologyBastionOutputReference(this, "bastion");
  public get bastion() {
    return this._bastion;
  }
  public putBastion(value: ClusterTopologyBastion) {
    this._bastion.internalValue = value;
  }
  public resetBastion() {
    this._bastion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionInput() {
    return this._bastion.internalValue;
  }

  // dns - computed: false, optional: false, required: true
  private _dns = new ClusterTopologyDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: ClusterTopologyDns) {
    this._dns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }
}
export interface ClusterWarmPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#enable_lifecycle_hook Cluster#enable_lifecycle_hook}
  */
  readonly enableLifecycleHook?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#max_size Cluster#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/resources/cluster#min_size Cluster#min_size}
  */
  readonly minSize?: number;
}

export function clusterWarmPoolToTerraform(struct?: ClusterWarmPoolOutputReference | ClusterWarmPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_lifecycle_hook: cdktf.booleanToTerraform(struct!.enableLifecycleHook),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
  }
}


export function clusterWarmPoolToHclTerraform(struct?: ClusterWarmPoolOutputReference | ClusterWarmPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_lifecycle_hook: {
      value: cdktf.booleanToHclTerraform(struct!.enableLifecycleHook),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_size: {
      value: cdktf.numberToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterWarmPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterWarmPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableLifecycleHook !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLifecycleHook = this._enableLifecycleHook;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterWarmPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableLifecycleHook = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableLifecycleHook = value.enableLifecycleHook;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
    }
  }

  // enable_lifecycle_hook - computed: false, optional: true, required: false
  private _enableLifecycleHook?: boolean | cdktf.IResolvable; 
  public get enableLifecycleHook() {
    return this.getBooleanAttribute('enable_lifecycle_hook');
  }
  public set enableLifecycleHook(value: boolean | cdktf.IResolvable) {
    this._enableLifecycleHook = value;
  }
  public resetEnableLifecycleHook() {
    this._enableLifecycleHook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLifecycleHookInput() {
    return this._enableLifecycleHook;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }
}

// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#backplanebasedview Cluster#backplanebasedview}
  */
  readonly backplanebasedview?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#bootstrap_poll_delay Cluster#bootstrap_poll_delay}
  */
  readonly bootstrapPollDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#bootstrap_poll_interval Cluster#bootstrap_poll_interval}
  */
  readonly bootstrapPollInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#bootstrap_poll_timeout Cluster#bootstrap_poll_timeout}
  */
  readonly bootstrapPollTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#bootstrap_total_timeout Cluster#bootstrap_total_timeout}
  */
  readonly bootstrapTotalTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#clid Cluster#clid}
  */
  readonly clid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#clip Cluster#clip}
  */
  readonly clip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#clip_migration_poll_delay Cluster#clip_migration_poll_delay}
  */
  readonly clipMigrationPollDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#clip_migration_poll_interval Cluster#clip_migration_poll_interval}
  */
  readonly clipMigrationPollInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#clip_migration_poll_timeout Cluster#clip_migration_poll_timeout}
  */
  readonly clipMigrationPollTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#clip_migration_total_timeout Cluster#clip_migration_total_timeout}
  */
  readonly clipMigrationTotalTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#deadinterval Cluster#deadinterval}
  */
  readonly deadinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#hellointerval Cluster#hellointerval}
  */
  readonly hellointerval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#inc Cluster#inc}
  */
  readonly inc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#node_add_poll_delay Cluster#node_add_poll_delay}
  */
  readonly nodeAddPollDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#node_add_poll_interval Cluster#node_add_poll_interval}
  */
  readonly nodeAddPollInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#node_add_total_timeout Cluster#node_add_total_timeout}
  */
  readonly nodeAddTotalTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#nodegroup Cluster#nodegroup}
  */
  readonly nodegroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#preemption Cluster#preemption}
  */
  readonly preemption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#processlocal Cluster#processlocal}
  */
  readonly processlocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#quorumtype Cluster#quorumtype}
  */
  readonly quorumtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#retainconnectionsoncluster Cluster#retainconnectionsoncluster}
  */
  readonly retainconnectionsoncluster?: string;
  /**
  * clusternode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#clusternode Cluster#clusternode}
  */
  readonly clusternode: ClusterClusternode[] | cdktf.IResolvable;
  /**
  * clusternodegroup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#clusternodegroup Cluster#clusternodegroup}
  */
  readonly clusternodegroup?: ClusterClusternodegroup[] | cdktf.IResolvable;
}
export interface ClusterClusternode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#addsnip Cluster#addsnip}
  */
  readonly addsnip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#backplane Cluster#backplane}
  */
  readonly backplane?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#clearnodegroupconfig Cluster#clearnodegroupconfig}
  */
  readonly clearnodegroupconfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#delay Cluster#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#endpoint Cluster#endpoint}
  */
  readonly endpoint: string;
  /**
  * Ignore validity of endpoint TLS certificate if true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#insecure_skip_verify Cluster#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#ipaddress Cluster#ipaddress}
  */
  readonly ipaddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#nodegroup Cluster#nodegroup}
  */
  readonly nodegroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#nodeid Cluster#nodeid}
  */
  readonly nodeid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#password Cluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#priority Cluster#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#snip_ipaddress Cluster#snip_ipaddress}
  */
  readonly snipIpaddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#snip_netmask Cluster#snip_netmask}
  */
  readonly snipNetmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#state Cluster#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#tunnelmode Cluster#tunnelmode}
  */
  readonly tunnelmode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#username Cluster#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#vtysh Cluster#vtysh}
  */
  readonly vtysh?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#vtysh_enable Cluster#vtysh_enable}
  */
  readonly vtyshEnable?: boolean | cdktf.IResolvable;
}

export function clusterClusternodeToTerraform(struct?: ClusterClusternode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addsnip: cdktf.booleanToTerraform(struct!.addsnip),
    backplane: cdktf.stringToTerraform(struct!.backplane),
    clearnodegroupconfig: cdktf.stringToTerraform(struct!.clearnodegroupconfig),
    delay: cdktf.numberToTerraform(struct!.delay),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    ipaddress: cdktf.stringToTerraform(struct!.ipaddress),
    nodegroup: cdktf.stringToTerraform(struct!.nodegroup),
    nodeid: cdktf.numberToTerraform(struct!.nodeid),
    password: cdktf.stringToTerraform(struct!.password),
    priority: cdktf.numberToTerraform(struct!.priority),
    snip_ipaddress: cdktf.stringToTerraform(struct!.snipIpaddress),
    snip_netmask: cdktf.stringToTerraform(struct!.snipNetmask),
    state: cdktf.stringToTerraform(struct!.state),
    tunnelmode: cdktf.stringToTerraform(struct!.tunnelmode),
    username: cdktf.stringToTerraform(struct!.username),
    vtysh: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vtysh),
    vtysh_enable: cdktf.booleanToTerraform(struct!.vtyshEnable),
  }
}


export function clusterClusternodeToHclTerraform(struct?: ClusterClusternode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addsnip: {
      value: cdktf.booleanToHclTerraform(struct!.addsnip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backplane: {
      value: cdktf.stringToHclTerraform(struct!.backplane),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clearnodegroupconfig: {
      value: cdktf.stringToHclTerraform(struct!.clearnodegroupconfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay: {
      value: cdktf.numberToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipaddress: {
      value: cdktf.stringToHclTerraform(struct!.ipaddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodegroup: {
      value: cdktf.stringToHclTerraform(struct!.nodegroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodeid: {
      value: cdktf.numberToHclTerraform(struct!.nodeid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snip_ipaddress: {
      value: cdktf.stringToHclTerraform(struct!.snipIpaddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snip_netmask: {
      value: cdktf.stringToHclTerraform(struct!.snipNetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnelmode: {
      value: cdktf.stringToHclTerraform(struct!.tunnelmode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vtysh: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vtysh),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vtysh_enable: {
      value: cdktf.booleanToHclTerraform(struct!.vtyshEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterClusternodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterClusternode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addsnip !== undefined) {
      hasAnyValues = true;
      internalValueResult.addsnip = this._addsnip;
    }
    if (this._backplane !== undefined) {
      hasAnyValues = true;
      internalValueResult.backplane = this._backplane;
    }
    if (this._clearnodegroupconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearnodegroupconfig = this._clearnodegroupconfig;
    }
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._ipaddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddress = this._ipaddress;
    }
    if (this._nodegroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodegroup = this._nodegroup;
    }
    if (this._nodeid !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeid = this._nodeid;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._snipIpaddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.snipIpaddress = this._snipIpaddress;
    }
    if (this._snipNetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.snipNetmask = this._snipNetmask;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._tunnelmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelmode = this._tunnelmode;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._vtysh !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtysh = this._vtysh;
    }
    if (this._vtyshEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtyshEnable = this._vtyshEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterClusternode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addsnip = undefined;
      this._backplane = undefined;
      this._clearnodegroupconfig = undefined;
      this._delay = undefined;
      this._endpoint = undefined;
      this._insecureSkipVerify = undefined;
      this._ipaddress = undefined;
      this._nodegroup = undefined;
      this._nodeid = undefined;
      this._password = undefined;
      this._priority = undefined;
      this._snipIpaddress = undefined;
      this._snipNetmask = undefined;
      this._state = undefined;
      this._tunnelmode = undefined;
      this._username = undefined;
      this._vtysh = undefined;
      this._vtyshEnable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addsnip = value.addsnip;
      this._backplane = value.backplane;
      this._clearnodegroupconfig = value.clearnodegroupconfig;
      this._delay = value.delay;
      this._endpoint = value.endpoint;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._ipaddress = value.ipaddress;
      this._nodegroup = value.nodegroup;
      this._nodeid = value.nodeid;
      this._password = value.password;
      this._priority = value.priority;
      this._snipIpaddress = value.snipIpaddress;
      this._snipNetmask = value.snipNetmask;
      this._state = value.state;
      this._tunnelmode = value.tunnelmode;
      this._username = value.username;
      this._vtysh = value.vtysh;
      this._vtyshEnable = value.vtyshEnable;
    }
  }

  // addsnip - computed: false, optional: true, required: false
  private _addsnip?: boolean | cdktf.IResolvable; 
  public get addsnip() {
    return this.getBooleanAttribute('addsnip');
  }
  public set addsnip(value: boolean | cdktf.IResolvable) {
    this._addsnip = value;
  }
  public resetAddsnip() {
    this._addsnip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addsnipInput() {
    return this._addsnip;
  }

  // backplane - computed: true, optional: true, required: false
  private _backplane?: string; 
  public get backplane() {
    return this.getStringAttribute('backplane');
  }
  public set backplane(value: string) {
    this._backplane = value;
  }
  public resetBackplane() {
    this._backplane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backplaneInput() {
    return this._backplane;
  }

  // clearnodegroupconfig - computed: false, optional: true, required: false
  private _clearnodegroupconfig?: string; 
  public get clearnodegroupconfig() {
    return this.getStringAttribute('clearnodegroupconfig');
  }
  public set clearnodegroupconfig(value: string) {
    this._clearnodegroupconfig = value;
  }
  public resetClearnodegroupconfig() {
    this._clearnodegroupconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearnodegroupconfigInput() {
    return this._clearnodegroupconfig;
  }

  // delay - computed: true, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // ipaddress - computed: false, optional: false, required: true
  private _ipaddress?: string; 
  public get ipaddress() {
    return this.getStringAttribute('ipaddress');
  }
  public set ipaddress(value: string) {
    this._ipaddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress;
  }

  // nodegroup - computed: true, optional: true, required: false
  private _nodegroup?: string; 
  public get nodegroup() {
    return this.getStringAttribute('nodegroup');
  }
  public set nodegroup(value: string) {
    this._nodegroup = value;
  }
  public resetNodegroup() {
    this._nodegroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodegroupInput() {
    return this._nodegroup;
  }

  // nodeid - computed: false, optional: false, required: true
  private _nodeid?: number; 
  public get nodeid() {
    return this.getNumberAttribute('nodeid');
  }
  public set nodeid(value: number) {
    this._nodeid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeidInput() {
    return this._nodeid;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // snip_ipaddress - computed: false, optional: true, required: false
  private _snipIpaddress?: string; 
  public get snipIpaddress() {
    return this.getStringAttribute('snip_ipaddress');
  }
  public set snipIpaddress(value: string) {
    this._snipIpaddress = value;
  }
  public resetSnipIpaddress() {
    this._snipIpaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snipIpaddressInput() {
    return this._snipIpaddress;
  }

  // snip_netmask - computed: false, optional: true, required: false
  private _snipNetmask?: string; 
  public get snipNetmask() {
    return this.getStringAttribute('snip_netmask');
  }
  public set snipNetmask(value: string) {
    this._snipNetmask = value;
  }
  public resetSnipNetmask() {
    this._snipNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snipNetmaskInput() {
    return this._snipNetmask;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tunnelmode - computed: true, optional: true, required: false
  private _tunnelmode?: string; 
  public get tunnelmode() {
    return this.getStringAttribute('tunnelmode');
  }
  public set tunnelmode(value: string) {
    this._tunnelmode = value;
  }
  public resetTunnelmode() {
    this._tunnelmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelmodeInput() {
    return this._tunnelmode;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vtysh - computed: false, optional: true, required: false
  private _vtysh?: string[]; 
  public get vtysh() {
    return this.getListAttribute('vtysh');
  }
  public set vtysh(value: string[]) {
    this._vtysh = value;
  }
  public resetVtysh() {
    this._vtysh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtyshInput() {
    return this._vtysh;
  }

  // vtysh_enable - computed: false, optional: true, required: false
  private _vtyshEnable?: boolean | cdktf.IResolvable; 
  public get vtyshEnable() {
    return this.getBooleanAttribute('vtysh_enable');
  }
  public set vtyshEnable(value: boolean | cdktf.IResolvable) {
    this._vtyshEnable = value;
  }
  public resetVtyshEnable() {
    this._vtyshEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtyshEnableInput() {
    return this._vtyshEnable;
  }
}

export class ClusterClusternodeList extends cdktf.ComplexList {
  public internalValue? : ClusterClusternode[] | cdktf.IResolvable

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
  public get(index: number): ClusterClusternodeOutputReference {
    return new ClusterClusternodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterClusternodegroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#name Cluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#priority Cluster#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#state Cluster#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#sticky Cluster#sticky}
  */
  readonly sticky?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#strict Cluster#strict}
  */
  readonly strict?: string;
}

export function clusterClusternodegroupToTerraform(struct?: ClusterClusternodegroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    state: cdktf.stringToTerraform(struct!.state),
    sticky: cdktf.stringToTerraform(struct!.sticky),
    strict: cdktf.stringToTerraform(struct!.strict),
  }
}


export function clusterClusternodegroupToHclTerraform(struct?: ClusterClusternodegroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sticky: {
      value: cdktf.stringToHclTerraform(struct!.sticky),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strict: {
      value: cdktf.stringToHclTerraform(struct!.strict),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterClusternodegroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterClusternodegroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._sticky !== undefined) {
      hasAnyValues = true;
      internalValueResult.sticky = this._sticky;
    }
    if (this._strict !== undefined) {
      hasAnyValues = true;
      internalValueResult.strict = this._strict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterClusternodegroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._state = undefined;
      this._sticky = undefined;
      this._strict = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._priority = value.priority;
      this._state = value.state;
      this._sticky = value.sticky;
      this._strict = value.strict;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // sticky - computed: true, optional: true, required: false
  private _sticky?: string; 
  public get sticky() {
    return this.getStringAttribute('sticky');
  }
  public set sticky(value: string) {
    this._sticky = value;
  }
  public resetSticky() {
    this._sticky = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyInput() {
    return this._sticky;
  }

  // strict - computed: true, optional: true, required: false
  private _strict?: string; 
  public get strict() {
    return this.getStringAttribute('strict');
  }
  public set strict(value: string) {
    this._strict = value;
  }
  public resetStrict() {
    this._strict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictInput() {
    return this._strict;
  }
}

export class ClusterClusternodegroupList extends cdktf.ComplexList {
  public internalValue? : ClusterClusternodegroup[] | cdktf.IResolvable

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
  public get(index: number): ClusterClusternodegroupOutputReference {
    return new ClusterClusternodegroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster citrixadc_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/cluster citrixadc_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_cluster',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backplanebasedview = config.backplanebasedview;
    this._bootstrapPollDelay = config.bootstrapPollDelay;
    this._bootstrapPollInterval = config.bootstrapPollInterval;
    this._bootstrapPollTimeout = config.bootstrapPollTimeout;
    this._bootstrapTotalTimeout = config.bootstrapTotalTimeout;
    this._clid = config.clid;
    this._clip = config.clip;
    this._clipMigrationPollDelay = config.clipMigrationPollDelay;
    this._clipMigrationPollInterval = config.clipMigrationPollInterval;
    this._clipMigrationPollTimeout = config.clipMigrationPollTimeout;
    this._clipMigrationTotalTimeout = config.clipMigrationTotalTimeout;
    this._deadinterval = config.deadinterval;
    this._hellointerval = config.hellointerval;
    this._id = config.id;
    this._inc = config.inc;
    this._nodeAddPollDelay = config.nodeAddPollDelay;
    this._nodeAddPollInterval = config.nodeAddPollInterval;
    this._nodeAddTotalTimeout = config.nodeAddTotalTimeout;
    this._nodegroup = config.nodegroup;
    this._preemption = config.preemption;
    this._processlocal = config.processlocal;
    this._quorumtype = config.quorumtype;
    this._retainconnectionsoncluster = config.retainconnectionsoncluster;
    this._clusternode.internalValue = config.clusternode;
    this._clusternodegroup.internalValue = config.clusternodegroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backplanebasedview - computed: true, optional: true, required: false
  private _backplanebasedview?: string; 
  public get backplanebasedview() {
    return this.getStringAttribute('backplanebasedview');
  }
  public set backplanebasedview(value: string) {
    this._backplanebasedview = value;
  }
  public resetBackplanebasedview() {
    this._backplanebasedview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backplanebasedviewInput() {
    return this._backplanebasedview;
  }

  // bootstrap_poll_delay - computed: false, optional: true, required: false
  private _bootstrapPollDelay?: string; 
  public get bootstrapPollDelay() {
    return this.getStringAttribute('bootstrap_poll_delay');
  }
  public set bootstrapPollDelay(value: string) {
    this._bootstrapPollDelay = value;
  }
  public resetBootstrapPollDelay() {
    this._bootstrapPollDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapPollDelayInput() {
    return this._bootstrapPollDelay;
  }

  // bootstrap_poll_interval - computed: false, optional: true, required: false
  private _bootstrapPollInterval?: string; 
  public get bootstrapPollInterval() {
    return this.getStringAttribute('bootstrap_poll_interval');
  }
  public set bootstrapPollInterval(value: string) {
    this._bootstrapPollInterval = value;
  }
  public resetBootstrapPollInterval() {
    this._bootstrapPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapPollIntervalInput() {
    return this._bootstrapPollInterval;
  }

  // bootstrap_poll_timeout - computed: false, optional: true, required: false
  private _bootstrapPollTimeout?: string; 
  public get bootstrapPollTimeout() {
    return this.getStringAttribute('bootstrap_poll_timeout');
  }
  public set bootstrapPollTimeout(value: string) {
    this._bootstrapPollTimeout = value;
  }
  public resetBootstrapPollTimeout() {
    this._bootstrapPollTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapPollTimeoutInput() {
    return this._bootstrapPollTimeout;
  }

  // bootstrap_total_timeout - computed: false, optional: true, required: false
  private _bootstrapTotalTimeout?: string; 
  public get bootstrapTotalTimeout() {
    return this.getStringAttribute('bootstrap_total_timeout');
  }
  public set bootstrapTotalTimeout(value: string) {
    this._bootstrapTotalTimeout = value;
  }
  public resetBootstrapTotalTimeout() {
    this._bootstrapTotalTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapTotalTimeoutInput() {
    return this._bootstrapTotalTimeout;
  }

  // clid - computed: false, optional: false, required: true
  private _clid?: number; 
  public get clid() {
    return this.getNumberAttribute('clid');
  }
  public set clid(value: number) {
    this._clid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clidInput() {
    return this._clid;
  }

  // clip - computed: false, optional: false, required: true
  private _clip?: string; 
  public get clip() {
    return this.getStringAttribute('clip');
  }
  public set clip(value: string) {
    this._clip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clipInput() {
    return this._clip;
  }

  // clip_migration_poll_delay - computed: false, optional: true, required: false
  private _clipMigrationPollDelay?: string; 
  public get clipMigrationPollDelay() {
    return this.getStringAttribute('clip_migration_poll_delay');
  }
  public set clipMigrationPollDelay(value: string) {
    this._clipMigrationPollDelay = value;
  }
  public resetClipMigrationPollDelay() {
    this._clipMigrationPollDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clipMigrationPollDelayInput() {
    return this._clipMigrationPollDelay;
  }

  // clip_migration_poll_interval - computed: false, optional: true, required: false
  private _clipMigrationPollInterval?: string; 
  public get clipMigrationPollInterval() {
    return this.getStringAttribute('clip_migration_poll_interval');
  }
  public set clipMigrationPollInterval(value: string) {
    this._clipMigrationPollInterval = value;
  }
  public resetClipMigrationPollInterval() {
    this._clipMigrationPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clipMigrationPollIntervalInput() {
    return this._clipMigrationPollInterval;
  }

  // clip_migration_poll_timeout - computed: false, optional: true, required: false
  private _clipMigrationPollTimeout?: string; 
  public get clipMigrationPollTimeout() {
    return this.getStringAttribute('clip_migration_poll_timeout');
  }
  public set clipMigrationPollTimeout(value: string) {
    this._clipMigrationPollTimeout = value;
  }
  public resetClipMigrationPollTimeout() {
    this._clipMigrationPollTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clipMigrationPollTimeoutInput() {
    return this._clipMigrationPollTimeout;
  }

  // clip_migration_total_timeout - computed: false, optional: true, required: false
  private _clipMigrationTotalTimeout?: string; 
  public get clipMigrationTotalTimeout() {
    return this.getStringAttribute('clip_migration_total_timeout');
  }
  public set clipMigrationTotalTimeout(value: string) {
    this._clipMigrationTotalTimeout = value;
  }
  public resetClipMigrationTotalTimeout() {
    this._clipMigrationTotalTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clipMigrationTotalTimeoutInput() {
    return this._clipMigrationTotalTimeout;
  }

  // deadinterval - computed: true, optional: true, required: false
  private _deadinterval?: number; 
  public get deadinterval() {
    return this.getNumberAttribute('deadinterval');
  }
  public set deadinterval(value: number) {
    this._deadinterval = value;
  }
  public resetDeadinterval() {
    this._deadinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadintervalInput() {
    return this._deadinterval;
  }

  // hellointerval - computed: true, optional: true, required: false
  private _hellointerval?: number; 
  public get hellointerval() {
    return this.getNumberAttribute('hellointerval');
  }
  public set hellointerval(value: number) {
    this._hellointerval = value;
  }
  public resetHellointerval() {
    this._hellointerval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hellointervalInput() {
    return this._hellointerval;
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

  // inc - computed: true, optional: true, required: false
  private _inc?: string; 
  public get inc() {
    return this.getStringAttribute('inc');
  }
  public set inc(value: string) {
    this._inc = value;
  }
  public resetInc() {
    this._inc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incInput() {
    return this._inc;
  }

  // node_add_poll_delay - computed: false, optional: true, required: false
  private _nodeAddPollDelay?: string; 
  public get nodeAddPollDelay() {
    return this.getStringAttribute('node_add_poll_delay');
  }
  public set nodeAddPollDelay(value: string) {
    this._nodeAddPollDelay = value;
  }
  public resetNodeAddPollDelay() {
    this._nodeAddPollDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAddPollDelayInput() {
    return this._nodeAddPollDelay;
  }

  // node_add_poll_interval - computed: false, optional: true, required: false
  private _nodeAddPollInterval?: string; 
  public get nodeAddPollInterval() {
    return this.getStringAttribute('node_add_poll_interval');
  }
  public set nodeAddPollInterval(value: string) {
    this._nodeAddPollInterval = value;
  }
  public resetNodeAddPollInterval() {
    this._nodeAddPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAddPollIntervalInput() {
    return this._nodeAddPollInterval;
  }

  // node_add_total_timeout - computed: false, optional: true, required: false
  private _nodeAddTotalTimeout?: string; 
  public get nodeAddTotalTimeout() {
    return this.getStringAttribute('node_add_total_timeout');
  }
  public set nodeAddTotalTimeout(value: string) {
    this._nodeAddTotalTimeout = value;
  }
  public resetNodeAddTotalTimeout() {
    this._nodeAddTotalTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAddTotalTimeoutInput() {
    return this._nodeAddTotalTimeout;
  }

  // nodegroup - computed: false, optional: true, required: false
  private _nodegroup?: string; 
  public get nodegroup() {
    return this.getStringAttribute('nodegroup');
  }
  public set nodegroup(value: string) {
    this._nodegroup = value;
  }
  public resetNodegroup() {
    this._nodegroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodegroupInput() {
    return this._nodegroup;
  }

  // preemption - computed: true, optional: true, required: false
  private _preemption?: string; 
  public get preemption() {
    return this.getStringAttribute('preemption');
  }
  public set preemption(value: string) {
    this._preemption = value;
  }
  public resetPreemption() {
    this._preemption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionInput() {
    return this._preemption;
  }

  // processlocal - computed: true, optional: true, required: false
  private _processlocal?: string; 
  public get processlocal() {
    return this.getStringAttribute('processlocal');
  }
  public set processlocal(value: string) {
    this._processlocal = value;
  }
  public resetProcesslocal() {
    this._processlocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processlocalInput() {
    return this._processlocal;
  }

  // quorumtype - computed: true, optional: true, required: false
  private _quorumtype?: string; 
  public get quorumtype() {
    return this.getStringAttribute('quorumtype');
  }
  public set quorumtype(value: string) {
    this._quorumtype = value;
  }
  public resetQuorumtype() {
    this._quorumtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quorumtypeInput() {
    return this._quorumtype;
  }

  // retainconnectionsoncluster - computed: true, optional: true, required: false
  private _retainconnectionsoncluster?: string; 
  public get retainconnectionsoncluster() {
    return this.getStringAttribute('retainconnectionsoncluster');
  }
  public set retainconnectionsoncluster(value: string) {
    this._retainconnectionsoncluster = value;
  }
  public resetRetainconnectionsoncluster() {
    this._retainconnectionsoncluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainconnectionsonclusterInput() {
    return this._retainconnectionsoncluster;
  }

  // clusternode - computed: false, optional: false, required: true
  private _clusternode = new ClusterClusternodeList(this, "clusternode", true);
  public get clusternode() {
    return this._clusternode;
  }
  public putClusternode(value: ClusterClusternode[] | cdktf.IResolvable) {
    this._clusternode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusternodeInput() {
    return this._clusternode.internalValue;
  }

  // clusternodegroup - computed: false, optional: true, required: false
  private _clusternodegroup = new ClusterClusternodegroupList(this, "clusternodegroup", true);
  public get clusternodegroup() {
    return this._clusternodegroup;
  }
  public putClusternodegroup(value: ClusterClusternodegroup[] | cdktf.IResolvable) {
    this._clusternodegroup.internalValue = value;
  }
  public resetClusternodegroup() {
    this._clusternodegroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusternodegroupInput() {
    return this._clusternodegroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backplanebasedview: cdktf.stringToTerraform(this._backplanebasedview),
      bootstrap_poll_delay: cdktf.stringToTerraform(this._bootstrapPollDelay),
      bootstrap_poll_interval: cdktf.stringToTerraform(this._bootstrapPollInterval),
      bootstrap_poll_timeout: cdktf.stringToTerraform(this._bootstrapPollTimeout),
      bootstrap_total_timeout: cdktf.stringToTerraform(this._bootstrapTotalTimeout),
      clid: cdktf.numberToTerraform(this._clid),
      clip: cdktf.stringToTerraform(this._clip),
      clip_migration_poll_delay: cdktf.stringToTerraform(this._clipMigrationPollDelay),
      clip_migration_poll_interval: cdktf.stringToTerraform(this._clipMigrationPollInterval),
      clip_migration_poll_timeout: cdktf.stringToTerraform(this._clipMigrationPollTimeout),
      clip_migration_total_timeout: cdktf.stringToTerraform(this._clipMigrationTotalTimeout),
      deadinterval: cdktf.numberToTerraform(this._deadinterval),
      hellointerval: cdktf.numberToTerraform(this._hellointerval),
      id: cdktf.stringToTerraform(this._id),
      inc: cdktf.stringToTerraform(this._inc),
      node_add_poll_delay: cdktf.stringToTerraform(this._nodeAddPollDelay),
      node_add_poll_interval: cdktf.stringToTerraform(this._nodeAddPollInterval),
      node_add_total_timeout: cdktf.stringToTerraform(this._nodeAddTotalTimeout),
      nodegroup: cdktf.stringToTerraform(this._nodegroup),
      preemption: cdktf.stringToTerraform(this._preemption),
      processlocal: cdktf.stringToTerraform(this._processlocal),
      quorumtype: cdktf.stringToTerraform(this._quorumtype),
      retainconnectionsoncluster: cdktf.stringToTerraform(this._retainconnectionsoncluster),
      clusternode: cdktf.listMapper(clusterClusternodeToTerraform, true)(this._clusternode.internalValue),
      clusternodegroup: cdktf.listMapper(clusterClusternodegroupToTerraform, true)(this._clusternodegroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backplanebasedview: {
        value: cdktf.stringToHclTerraform(this._backplanebasedview),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootstrap_poll_delay: {
        value: cdktf.stringToHclTerraform(this._bootstrapPollDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootstrap_poll_interval: {
        value: cdktf.stringToHclTerraform(this._bootstrapPollInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootstrap_poll_timeout: {
        value: cdktf.stringToHclTerraform(this._bootstrapPollTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootstrap_total_timeout: {
        value: cdktf.stringToHclTerraform(this._bootstrapTotalTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clid: {
        value: cdktf.numberToHclTerraform(this._clid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      clip: {
        value: cdktf.stringToHclTerraform(this._clip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clip_migration_poll_delay: {
        value: cdktf.stringToHclTerraform(this._clipMigrationPollDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clip_migration_poll_interval: {
        value: cdktf.stringToHclTerraform(this._clipMigrationPollInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clip_migration_poll_timeout: {
        value: cdktf.stringToHclTerraform(this._clipMigrationPollTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clip_migration_total_timeout: {
        value: cdktf.stringToHclTerraform(this._clipMigrationTotalTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deadinterval: {
        value: cdktf.numberToHclTerraform(this._deadinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hellointerval: {
        value: cdktf.numberToHclTerraform(this._hellointerval),
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
      inc: {
        value: cdktf.stringToHclTerraform(this._inc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_add_poll_delay: {
        value: cdktf.stringToHclTerraform(this._nodeAddPollDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_add_poll_interval: {
        value: cdktf.stringToHclTerraform(this._nodeAddPollInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_add_total_timeout: {
        value: cdktf.stringToHclTerraform(this._nodeAddTotalTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodegroup: {
        value: cdktf.stringToHclTerraform(this._nodegroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preemption: {
        value: cdktf.stringToHclTerraform(this._preemption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      processlocal: {
        value: cdktf.stringToHclTerraform(this._processlocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quorumtype: {
        value: cdktf.stringToHclTerraform(this._quorumtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retainconnectionsoncluster: {
        value: cdktf.stringToHclTerraform(this._retainconnectionsoncluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clusternode: {
        value: cdktf.listMapperHcl(clusterClusternodeToHclTerraform, true)(this._clusternode.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClusterClusternodeList",
      },
      clusternodegroup: {
        value: cdktf.listMapperHcl(clusterClusternodegroupToHclTerraform, true)(this._clusternodegroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClusterClusternodegroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

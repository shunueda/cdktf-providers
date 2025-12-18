// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsaclsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#acls_apply_trigger Nsacls#acls_apply_trigger}
  */
  readonly aclsApplyTrigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#aclsname Nsacls#aclsname}
  */
  readonly aclsname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#id Nsacls#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#type Nsacls#type}
  */
  readonly type?: string;
  /**
  * acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#acl Nsacls#acl}
  */
  readonly acl?: NsaclsAcl[] | cdktf.IResolvable;
}
export interface NsaclsAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#aclaction Nsacls#aclaction}
  */
  readonly aclaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#aclname Nsacls#aclname}
  */
  readonly aclname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#destipdataset Nsacls#destipdataset}
  */
  readonly destipdataset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#destipop Nsacls#destipop}
  */
  readonly destipop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#destipval Nsacls#destipval}
  */
  readonly destipval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#destportdataset Nsacls#destportdataset}
  */
  readonly destportdataset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#destportop Nsacls#destportop}
  */
  readonly destportop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#destportval Nsacls#destportval}
  */
  readonly destportval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#established Nsacls#established}
  */
  readonly established?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#icmpcode Nsacls#icmpcode}
  */
  readonly icmpcode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#icmptype Nsacls#icmptype}
  */
  readonly icmptype?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#interface Nsacls#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#logstate Nsacls#logstate}
  */
  readonly logstate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#priority Nsacls#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#protocol Nsacls#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#protocolnumber Nsacls#protocolnumber}
  */
  readonly protocolnumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#ratelimit Nsacls#ratelimit}
  */
  readonly ratelimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#srcipdataset Nsacls#srcipdataset}
  */
  readonly srcipdataset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#srcipop Nsacls#srcipop}
  */
  readonly srcipop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#srcipval Nsacls#srcipval}
  */
  readonly srcipval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#srcmac Nsacls#srcmac}
  */
  readonly srcmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#srcportdataset Nsacls#srcportdataset}
  */
  readonly srcportdataset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#srcportop Nsacls#srcportop}
  */
  readonly srcportop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#srcportval Nsacls#srcportval}
  */
  readonly srcportval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#state Nsacls#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#td Nsacls#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#ttl Nsacls#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#vlan Nsacls#vlan}
  */
  readonly vlan?: number;
}

export function nsaclsAclToTerraform(struct?: NsaclsAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aclaction: cdktf.stringToTerraform(struct!.aclaction),
    aclname: cdktf.stringToTerraform(struct!.aclname),
    destipdataset: cdktf.stringToTerraform(struct!.destipdataset),
    destipop: cdktf.stringToTerraform(struct!.destipop),
    destipval: cdktf.stringToTerraform(struct!.destipval),
    destportdataset: cdktf.stringToTerraform(struct!.destportdataset),
    destportop: cdktf.stringToTerraform(struct!.destportop),
    destportval: cdktf.stringToTerraform(struct!.destportval),
    established: cdktf.booleanToTerraform(struct!.established),
    icmpcode: cdktf.numberToTerraform(struct!.icmpcode),
    icmptype: cdktf.numberToTerraform(struct!.icmptype),
    interface: cdktf.stringToTerraform(struct!.interface),
    logstate: cdktf.stringToTerraform(struct!.logstate),
    priority: cdktf.numberToTerraform(struct!.priority),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocolnumber: cdktf.numberToTerraform(struct!.protocolnumber),
    ratelimit: cdktf.numberToTerraform(struct!.ratelimit),
    srcipdataset: cdktf.stringToTerraform(struct!.srcipdataset),
    srcipop: cdktf.stringToTerraform(struct!.srcipop),
    srcipval: cdktf.stringToTerraform(struct!.srcipval),
    srcmac: cdktf.stringToTerraform(struct!.srcmac),
    srcportdataset: cdktf.stringToTerraform(struct!.srcportdataset),
    srcportop: cdktf.stringToTerraform(struct!.srcportop),
    srcportval: cdktf.stringToTerraform(struct!.srcportval),
    state: cdktf.stringToTerraform(struct!.state),
    td: cdktf.numberToTerraform(struct!.td),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function nsaclsAclToHclTerraform(struct?: NsaclsAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aclaction: {
      value: cdktf.stringToHclTerraform(struct!.aclaction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aclname: {
      value: cdktf.stringToHclTerraform(struct!.aclname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destipdataset: {
      value: cdktf.stringToHclTerraform(struct!.destipdataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destipop: {
      value: cdktf.stringToHclTerraform(struct!.destipop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destipval: {
      value: cdktf.stringToHclTerraform(struct!.destipval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destportdataset: {
      value: cdktf.stringToHclTerraform(struct!.destportdataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destportop: {
      value: cdktf.stringToHclTerraform(struct!.destportop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destportval: {
      value: cdktf.stringToHclTerraform(struct!.destportval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    established: {
      value: cdktf.booleanToHclTerraform(struct!.established),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    icmpcode: {
      value: cdktf.numberToHclTerraform(struct!.icmpcode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmptype: {
      value: cdktf.numberToHclTerraform(struct!.icmptype),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logstate: {
      value: cdktf.stringToHclTerraform(struct!.logstate),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocolnumber: {
      value: cdktf.numberToHclTerraform(struct!.protocolnumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratelimit: {
      value: cdktf.numberToHclTerraform(struct!.ratelimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    srcipdataset: {
      value: cdktf.stringToHclTerraform(struct!.srcipdataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcipop: {
      value: cdktf.stringToHclTerraform(struct!.srcipop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcipval: {
      value: cdktf.stringToHclTerraform(struct!.srcipval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcmac: {
      value: cdktf.stringToHclTerraform(struct!.srcmac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcportdataset: {
      value: cdktf.stringToHclTerraform(struct!.srcportdataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcportop: {
      value: cdktf.stringToHclTerraform(struct!.srcportop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcportval: {
      value: cdktf.stringToHclTerraform(struct!.srcportval),
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
    td: {
      value: cdktf.numberToHclTerraform(struct!.td),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsaclsAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsaclsAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclaction !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclaction = this._aclaction;
    }
    if (this._aclname !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclname = this._aclname;
    }
    if (this._destipdataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.destipdataset = this._destipdataset;
    }
    if (this._destipop !== undefined) {
      hasAnyValues = true;
      internalValueResult.destipop = this._destipop;
    }
    if (this._destipval !== undefined) {
      hasAnyValues = true;
      internalValueResult.destipval = this._destipval;
    }
    if (this._destportdataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.destportdataset = this._destportdataset;
    }
    if (this._destportop !== undefined) {
      hasAnyValues = true;
      internalValueResult.destportop = this._destportop;
    }
    if (this._destportval !== undefined) {
      hasAnyValues = true;
      internalValueResult.destportval = this._destportval;
    }
    if (this._established !== undefined) {
      hasAnyValues = true;
      internalValueResult.established = this._established;
    }
    if (this._icmpcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpcode = this._icmpcode;
    }
    if (this._icmptype !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmptype = this._icmptype;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._logstate !== undefined) {
      hasAnyValues = true;
      internalValueResult.logstate = this._logstate;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolnumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolnumber = this._protocolnumber;
    }
    if (this._ratelimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimit = this._ratelimit;
    }
    if (this._srcipdataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcipdataset = this._srcipdataset;
    }
    if (this._srcipop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcipop = this._srcipop;
    }
    if (this._srcipval !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcipval = this._srcipval;
    }
    if (this._srcmac !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcmac = this._srcmac;
    }
    if (this._srcportdataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcportdataset = this._srcportdataset;
    }
    if (this._srcportop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcportop = this._srcportop;
    }
    if (this._srcportval !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcportval = this._srcportval;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._td !== undefined) {
      hasAnyValues = true;
      internalValueResult.td = this._td;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsaclsAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclaction = undefined;
      this._aclname = undefined;
      this._destipdataset = undefined;
      this._destipop = undefined;
      this._destipval = undefined;
      this._destportdataset = undefined;
      this._destportop = undefined;
      this._destportval = undefined;
      this._established = undefined;
      this._icmpcode = undefined;
      this._icmptype = undefined;
      this._interface = undefined;
      this._logstate = undefined;
      this._priority = undefined;
      this._protocol = undefined;
      this._protocolnumber = undefined;
      this._ratelimit = undefined;
      this._srcipdataset = undefined;
      this._srcipop = undefined;
      this._srcipval = undefined;
      this._srcmac = undefined;
      this._srcportdataset = undefined;
      this._srcportop = undefined;
      this._srcportval = undefined;
      this._state = undefined;
      this._td = undefined;
      this._ttl = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclaction = value.aclaction;
      this._aclname = value.aclname;
      this._destipdataset = value.destipdataset;
      this._destipop = value.destipop;
      this._destipval = value.destipval;
      this._destportdataset = value.destportdataset;
      this._destportop = value.destportop;
      this._destportval = value.destportval;
      this._established = value.established;
      this._icmpcode = value.icmpcode;
      this._icmptype = value.icmptype;
      this._interface = value.interface;
      this._logstate = value.logstate;
      this._priority = value.priority;
      this._protocol = value.protocol;
      this._protocolnumber = value.protocolnumber;
      this._ratelimit = value.ratelimit;
      this._srcipdataset = value.srcipdataset;
      this._srcipop = value.srcipop;
      this._srcipval = value.srcipval;
      this._srcmac = value.srcmac;
      this._srcportdataset = value.srcportdataset;
      this._srcportop = value.srcportop;
      this._srcportval = value.srcportval;
      this._state = value.state;
      this._td = value.td;
      this._ttl = value.ttl;
      this._vlan = value.vlan;
    }
  }

  // aclaction - computed: true, optional: true, required: false
  private _aclaction?: string; 
  public get aclaction() {
    return this.getStringAttribute('aclaction');
  }
  public set aclaction(value: string) {
    this._aclaction = value;
  }
  public resetAclaction() {
    this._aclaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclactionInput() {
    return this._aclaction;
  }

  // aclname - computed: false, optional: false, required: true
  private _aclname?: string; 
  public get aclname() {
    return this.getStringAttribute('aclname');
  }
  public set aclname(value: string) {
    this._aclname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclnameInput() {
    return this._aclname;
  }

  // destipdataset - computed: true, optional: true, required: false
  private _destipdataset?: string; 
  public get destipdataset() {
    return this.getStringAttribute('destipdataset');
  }
  public set destipdataset(value: string) {
    this._destipdataset = value;
  }
  public resetDestipdataset() {
    this._destipdataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destipdatasetInput() {
    return this._destipdataset;
  }

  // destipop - computed: true, optional: true, required: false
  private _destipop?: string; 
  public get destipop() {
    return this.getStringAttribute('destipop');
  }
  public set destipop(value: string) {
    this._destipop = value;
  }
  public resetDestipop() {
    this._destipop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destipopInput() {
    return this._destipop;
  }

  // destipval - computed: true, optional: true, required: false
  private _destipval?: string; 
  public get destipval() {
    return this.getStringAttribute('destipval');
  }
  public set destipval(value: string) {
    this._destipval = value;
  }
  public resetDestipval() {
    this._destipval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destipvalInput() {
    return this._destipval;
  }

  // destportdataset - computed: true, optional: true, required: false
  private _destportdataset?: string; 
  public get destportdataset() {
    return this.getStringAttribute('destportdataset');
  }
  public set destportdataset(value: string) {
    this._destportdataset = value;
  }
  public resetDestportdataset() {
    this._destportdataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destportdatasetInput() {
    return this._destportdataset;
  }

  // destportop - computed: true, optional: true, required: false
  private _destportop?: string; 
  public get destportop() {
    return this.getStringAttribute('destportop');
  }
  public set destportop(value: string) {
    this._destportop = value;
  }
  public resetDestportop() {
    this._destportop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destportopInput() {
    return this._destportop;
  }

  // destportval - computed: true, optional: true, required: false
  private _destportval?: string; 
  public get destportval() {
    return this.getStringAttribute('destportval');
  }
  public set destportval(value: string) {
    this._destportval = value;
  }
  public resetDestportval() {
    this._destportval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destportvalInput() {
    return this._destportval;
  }

  // established - computed: true, optional: true, required: false
  private _established?: boolean | cdktf.IResolvable; 
  public get established() {
    return this.getBooleanAttribute('established');
  }
  public set established(value: boolean | cdktf.IResolvable) {
    this._established = value;
  }
  public resetEstablished() {
    this._established = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get establishedInput() {
    return this._established;
  }

  // icmpcode - computed: true, optional: true, required: false
  private _icmpcode?: number; 
  public get icmpcode() {
    return this.getNumberAttribute('icmpcode');
  }
  public set icmpcode(value: number) {
    this._icmpcode = value;
  }
  public resetIcmpcode() {
    this._icmpcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpcodeInput() {
    return this._icmpcode;
  }

  // icmptype - computed: true, optional: true, required: false
  private _icmptype?: number; 
  public get icmptype() {
    return this.getNumberAttribute('icmptype');
  }
  public set icmptype(value: number) {
    this._icmptype = value;
  }
  public resetIcmptype() {
    this._icmptype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmptypeInput() {
    return this._icmptype;
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // logstate - computed: true, optional: true, required: false
  private _logstate?: string; 
  public get logstate() {
    return this.getStringAttribute('logstate');
  }
  public set logstate(value: string) {
    this._logstate = value;
  }
  public resetLogstate() {
    this._logstate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logstateInput() {
    return this._logstate;
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocolnumber - computed: true, optional: true, required: false
  private _protocolnumber?: number; 
  public get protocolnumber() {
    return this.getNumberAttribute('protocolnumber');
  }
  public set protocolnumber(value: number) {
    this._protocolnumber = value;
  }
  public resetProtocolnumber() {
    this._protocolnumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolnumberInput() {
    return this._protocolnumber;
  }

  // ratelimit - computed: true, optional: true, required: false
  private _ratelimit?: number; 
  public get ratelimit() {
    return this.getNumberAttribute('ratelimit');
  }
  public set ratelimit(value: number) {
    this._ratelimit = value;
  }
  public resetRatelimit() {
    this._ratelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitInput() {
    return this._ratelimit;
  }

  // srcipdataset - computed: true, optional: true, required: false
  private _srcipdataset?: string; 
  public get srcipdataset() {
    return this.getStringAttribute('srcipdataset');
  }
  public set srcipdataset(value: string) {
    this._srcipdataset = value;
  }
  public resetSrcipdataset() {
    this._srcipdataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipdatasetInput() {
    return this._srcipdataset;
  }

  // srcipop - computed: true, optional: true, required: false
  private _srcipop?: string; 
  public get srcipop() {
    return this.getStringAttribute('srcipop');
  }
  public set srcipop(value: string) {
    this._srcipop = value;
  }
  public resetSrcipop() {
    this._srcipop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipopInput() {
    return this._srcipop;
  }

  // srcipval - computed: true, optional: true, required: false
  private _srcipval?: string; 
  public get srcipval() {
    return this.getStringAttribute('srcipval');
  }
  public set srcipval(value: string) {
    this._srcipval = value;
  }
  public resetSrcipval() {
    this._srcipval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipvalInput() {
    return this._srcipval;
  }

  // srcmac - computed: true, optional: true, required: false
  private _srcmac?: string; 
  public get srcmac() {
    return this.getStringAttribute('srcmac');
  }
  public set srcmac(value: string) {
    this._srcmac = value;
  }
  public resetSrcmac() {
    this._srcmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcmacInput() {
    return this._srcmac;
  }

  // srcportdataset - computed: true, optional: true, required: false
  private _srcportdataset?: string; 
  public get srcportdataset() {
    return this.getStringAttribute('srcportdataset');
  }
  public set srcportdataset(value: string) {
    this._srcportdataset = value;
  }
  public resetSrcportdataset() {
    this._srcportdataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportdatasetInput() {
    return this._srcportdataset;
  }

  // srcportop - computed: true, optional: true, required: false
  private _srcportop?: string; 
  public get srcportop() {
    return this.getStringAttribute('srcportop');
  }
  public set srcportop(value: string) {
    this._srcportop = value;
  }
  public resetSrcportop() {
    this._srcportop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportopInput() {
    return this._srcportop;
  }

  // srcportval - computed: true, optional: true, required: false
  private _srcportval?: string; 
  public get srcportval() {
    return this.getStringAttribute('srcportval');
  }
  public set srcportval(value: string) {
    this._srcportval = value;
  }
  public resetSrcportval() {
    this._srcportval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportvalInput() {
    return this._srcportval;
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

  // td - computed: true, optional: true, required: false
  private _td?: number; 
  public get td() {
    return this.getNumberAttribute('td');
  }
  public set td(value: number) {
    this._td = value;
  }
  public resetTd() {
    this._td = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdInput() {
    return this._td;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class NsaclsAclList extends cdktf.ComplexList {
  public internalValue? : NsaclsAcl[] | cdktf.IResolvable

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
  public get(index: number): NsaclsAclOutputReference {
    return new NsaclsAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls citrixadc_nsacls}
*/
export class Nsacls extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsacls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nsacls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nsacls to import
  * @param importFromId The id of the existing Nsacls that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nsacls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsacls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsacls citrixadc_nsacls} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsaclsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NsaclsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsacls',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclsApplyTrigger = config.aclsApplyTrigger;
    this._aclsname = config.aclsname;
    this._id = config.id;
    this._type = config.type;
    this._acl.internalValue = config.acl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acls_apply_trigger - computed: true, optional: true, required: false
  private _aclsApplyTrigger?: string; 
  public get aclsApplyTrigger() {
    return this.getStringAttribute('acls_apply_trigger');
  }
  public set aclsApplyTrigger(value: string) {
    this._aclsApplyTrigger = value;
  }
  public resetAclsApplyTrigger() {
    this._aclsApplyTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsApplyTriggerInput() {
    return this._aclsApplyTrigger;
  }

  // aclsname - computed: true, optional: true, required: false
  private _aclsname?: string; 
  public get aclsname() {
    return this.getStringAttribute('aclsname');
  }
  public set aclsname(value: string) {
    this._aclsname = value;
  }
  public resetAclsname() {
    this._aclsname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsnameInput() {
    return this._aclsname;
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

  // type - computed: true, optional: true, required: false
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

  // acl - computed: false, optional: true, required: false
  private _acl = new NsaclsAclList(this, "acl", true);
  public get acl() {
    return this._acl;
  }
  public putAcl(value: NsaclsAcl[] | cdktf.IResolvable) {
    this._acl.internalValue = value;
  }
  public resetAcl() {
    this._acl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acls_apply_trigger: cdktf.stringToTerraform(this._aclsApplyTrigger),
      aclsname: cdktf.stringToTerraform(this._aclsname),
      id: cdktf.stringToTerraform(this._id),
      type: cdktf.stringToTerraform(this._type),
      acl: cdktf.listMapper(nsaclsAclToTerraform, true)(this._acl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acls_apply_trigger: {
        value: cdktf.stringToHclTerraform(this._aclsApplyTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aclsname: {
        value: cdktf.stringToHclTerraform(this._aclsname),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl: {
        value: cdktf.listMapperHcl(nsaclsAclToHclTerraform, true)(this._acl.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NsaclsAclList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

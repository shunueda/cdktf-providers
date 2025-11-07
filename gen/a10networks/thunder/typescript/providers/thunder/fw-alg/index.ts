// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FwAlgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#id FwAlg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#uuid FwAlg#uuid}
  */
  readonly uuid?: string;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#dns FwAlg#dns}
  */
  readonly dns?: FwAlgDns;
  /**
  * esp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#esp FwAlg#esp}
  */
  readonly esp?: FwAlgEsp;
  /**
  * ftp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#ftp FwAlg#ftp}
  */
  readonly ftp?: FwAlgFtp;
  /**
  * icmp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#icmp FwAlg#icmp}
  */
  readonly icmp?: FwAlgIcmp;
  /**
  * pptp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#pptp FwAlg#pptp}
  */
  readonly pptp?: FwAlgPptp;
  /**
  * rtsp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#rtsp FwAlg#rtsp}
  */
  readonly rtsp?: FwAlgRtsp;
  /**
  * sip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#sip FwAlg#sip}
  */
  readonly sip?: FwAlgSip;
  /**
  * tftp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#tftp FwAlg#tftp}
  */
  readonly tftp?: FwAlgTftp;
}
export interface FwAlgDns {
  /**
  * 'default-port-disable': Disable DNS ALG default port 53;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#default_port_disable FwAlg#default_port_disable}
  */
  readonly defaultPortDisable?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#uuid FwAlg#uuid}
  */
  readonly uuid?: string;
}

export function fwAlgDnsToTerraform(struct?: FwAlgDnsOutputReference | FwAlgDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_port_disable: cdktf.stringToTerraform(struct!.defaultPortDisable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fwAlgDnsToHclTerraform(struct?: FwAlgDnsOutputReference | FwAlgDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_port_disable: {
      value: cdktf.stringToHclTerraform(struct!.defaultPortDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwAlgDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwAlgDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPortDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPortDisable = this._defaultPortDisable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwAlgDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultPortDisable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultPortDisable = value.defaultPortDisable;
      this._uuid = value.uuid;
    }
  }

  // default_port_disable - computed: false, optional: true, required: false
  private _defaultPortDisable?: string; 
  public get defaultPortDisable() {
    return this.getStringAttribute('default_port_disable');
  }
  public set defaultPortDisable(value: string) {
    this._defaultPortDisable = value;
  }
  public resetDefaultPortDisable() {
    this._defaultPortDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPortDisableInput() {
    return this._defaultPortDisable;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FwAlgEspSamplingEnable {
  /**
  * 'all': all; 'session-created': ESP Sessions Created; 'helper-created': ESP Helper Sessions Created; 'helper-freed': ESP Helper Sessions Freed; 'helper-freed-used': ESP Helper Sessions freed used; 'helper-freed-unused': ESP Helper Sessions freed unused; 'helper-already-used': ESP Helper Session already used; 'helper-in-rml': ESP Helper Session in Remove List;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#counters1 FwAlg#counters1}
  */
  readonly counters1?: string;
}

export function fwAlgEspSamplingEnableToTerraform(struct?: FwAlgEspSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function fwAlgEspSamplingEnableToHclTerraform(struct?: FwAlgEspSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwAlgEspSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwAlgEspSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwAlgEspSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class FwAlgEspSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : FwAlgEspSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): FwAlgEspSamplingEnableOutputReference {
    return new FwAlgEspSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwAlgEsp {
  /**
  * 'default-port-disable': Disable ESP ALG default port 500;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#default_port_disable FwAlg#default_port_disable}
  */
  readonly defaultPortDisable?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#uuid FwAlg#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#sampling_enable FwAlg#sampling_enable}
  */
  readonly samplingEnable?: FwAlgEspSamplingEnable[] | cdktf.IResolvable;
}

export function fwAlgEspToTerraform(struct?: FwAlgEspOutputReference | FwAlgEsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_port_disable: cdktf.stringToTerraform(struct!.defaultPortDisable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(fwAlgEspSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function fwAlgEspToHclTerraform(struct?: FwAlgEspOutputReference | FwAlgEsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_port_disable: {
      value: cdktf.stringToHclTerraform(struct!.defaultPortDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(fwAlgEspSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "FwAlgEspSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwAlgEspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwAlgEsp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPortDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPortDisable = this._defaultPortDisable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwAlgEsp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultPortDisable = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultPortDisable = value.defaultPortDisable;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // default_port_disable - computed: false, optional: true, required: false
  private _defaultPortDisable?: string; 
  public get defaultPortDisable() {
    return this.getStringAttribute('default_port_disable');
  }
  public set defaultPortDisable(value: string) {
    this._defaultPortDisable = value;
  }
  public resetDefaultPortDisable() {
    this._defaultPortDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPortDisableInput() {
    return this._defaultPortDisable;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new FwAlgEspSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: FwAlgEspSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface FwAlgFtpSamplingEnable {
  /**
  * 'all': all; 'client-port-request': PORT Requests From Client; 'client-eprt-request': EPRT Requests From Client; 'server-pasv-reply': PASV Replies From Server; 'server-epsv-reply': EPSV Replies From Server; 'port-retransmits': PORT Retransmits; 'pasv-retransmits': PASV Retransmits; 'smp-app-type-mismatch': SMP App Type Mismatch; 'retransmit-sanity-check-failure': Retransmit Sanity Check Failure; 'smp-conn-alloc-failure': SMP Helper Conn Alloc Failure; 'port-helper-created': PORT Helper Created; 'pasv-helper-created': PASV Helper Created; 'port-helper-acquire-in-del-q': PORT Helper Acquire In Del Queue; 'port-helper-acquire-already-used': PORT Helper Acquire Already Used; 'pasv-helper-acquire-in-del-q': PASV Helper Acquire In Del Queue; 'pasv-helper-acquire-already-used': PASV Helper Acquire Already Used; 'port-helper-freed-used': PORT Helper Freed Used; 'port-helper-freed-unused': PORT Helper Freed Unused; 'pasv-helper-freed-used': PASV Helper Freed Used; 'pasv-helper-freed-unused': PASV Helper Freed Unused;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#counters1 FwAlg#counters1}
  */
  readonly counters1?: string;
}

export function fwAlgFtpSamplingEnableToTerraform(struct?: FwAlgFtpSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function fwAlgFtpSamplingEnableToHclTerraform(struct?: FwAlgFtpSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwAlgFtpSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwAlgFtpSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwAlgFtpSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class FwAlgFtpSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : FwAlgFtpSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): FwAlgFtpSamplingEnableOutputReference {
    return new FwAlgFtpSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwAlgFtp {
  /**
  * 'default-port-disable': Disable FTP ALG default port 21;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#default_port_disable FwAlg#default_port_disable}
  */
  readonly defaultPortDisable?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#uuid FwAlg#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#sampling_enable FwAlg#sampling_enable}
  */
  readonly samplingEnable?: FwAlgFtpSamplingEnable[] | cdktf.IResolvable;
}

export function fwAlgFtpToTerraform(struct?: FwAlgFtpOutputReference | FwAlgFtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_port_disable: cdktf.stringToTerraform(struct!.defaultPortDisable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(fwAlgFtpSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function fwAlgFtpToHclTerraform(struct?: FwAlgFtpOutputReference | FwAlgFtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_port_disable: {
      value: cdktf.stringToHclTerraform(struct!.defaultPortDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(fwAlgFtpSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "FwAlgFtpSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwAlgFtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwAlgFtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPortDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPortDisable = this._defaultPortDisable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwAlgFtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultPortDisable = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultPortDisable = value.defaultPortDisable;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // default_port_disable - computed: false, optional: true, required: false
  private _defaultPortDisable?: string; 
  public get defaultPortDisable() {
    return this.getStringAttribute('default_port_disable');
  }
  public set defaultPortDisable(value: string) {
    this._defaultPortDisable = value;
  }
  public resetDefaultPortDisable() {
    this._defaultPortDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPortDisableInput() {
    return this._defaultPortDisable;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new FwAlgFtpSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: FwAlgFtpSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface FwAlgIcmp {
  /**
  * 'disable': Disable ICMP ALG which allows ICMP errors to pass the firewall;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#disable FwAlg#disable}
  */
  readonly disable?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#uuid FwAlg#uuid}
  */
  readonly uuid?: string;
}

export function fwAlgIcmpToTerraform(struct?: FwAlgIcmpOutputReference | FwAlgIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.stringToTerraform(struct!.disable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fwAlgIcmpToHclTerraform(struct?: FwAlgIcmpOutputReference | FwAlgIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.stringToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwAlgIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwAlgIcmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwAlgIcmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._uuid = value.uuid;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: string; 
  public get disable() {
    return this.getStringAttribute('disable');
  }
  public set disable(value: string) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface FwAlgPptpSamplingEnable {
  /**
  * 'all': all; 'calls-established': Calls Established; 'call-req-pns-call-id-mismatch': Call ID Mismatch on Call Request; 'call-reply-pns-call-id-mismatch': Call ID Mismatch on Call Reply; 'gre-session-created': GRE Session Created; 'gre-session-freed': GRE Session Freed; 'call-req-retransmit': Call Request Retransmit; 'call-req-new': Call Request New; 'call-req-ext-alloc-failure': Call Request Ext Alloc Failure; 'call-reply-call-id-unknown': Call Reply Unknown Client Call ID; 'call-reply-retransmit': Call Reply Retransmit; 'call-reply-ext-ext-alloc-failure': Call Request Ext Alloc Failure; 'smp-app-type-mismatch': SMP App Type Mismatch; 'smp-client-call-id-mismatch': SMP Client Call ID Mismatch; 'smp-sessions-created': SMP Session Created; 'smp-sessions-freed': SMP Session Freed; 'smp-alloc-failure': SMP Session Alloc Failure; 'gre-conn-creation-failure': GRE Conn Alloc Failure; 'gre-conn-ext-creation-failure': GRE Conn Ext Alloc Failure; 'gre-no-fwd-route': GRE No Fwd Route; 'gre-no-rev-route': GRE No Rev Route; 'gre-no-control-conn': GRE No Control Conn; 'gre-conn-already-exists': GRE Conn Already Exists; 'gre-free-no-ext': GRE Free No Ext; 'gre-free-no-smp': GRE Free No SMP; 'gre-free-smp-app-type-mismatch': GRE Free SMP App Type Mismatch; 'control-freed': Control Session Freed; 'control-free-no-ext': Control Free No Ext; 'control-free-no-smp': Control Free No SMP; 'control-free-smp-app-type-mismatch': Control Free SMP App Type Mismatch;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#counters1 FwAlg#counters1}
  */
  readonly counters1?: string;
}

export function fwAlgPptpSamplingEnableToTerraform(struct?: FwAlgPptpSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function fwAlgPptpSamplingEnableToHclTerraform(struct?: FwAlgPptpSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwAlgPptpSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwAlgPptpSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwAlgPptpSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class FwAlgPptpSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : FwAlgPptpSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): FwAlgPptpSamplingEnableOutputReference {
    return new FwAlgPptpSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwAlgPptp {
  /**
  * 'default-port-disable': Disable PPTP ALG default port 1723;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#default_port_disable FwAlg#default_port_disable}
  */
  readonly defaultPortDisable?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#uuid FwAlg#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#sampling_enable FwAlg#sampling_enable}
  */
  readonly samplingEnable?: FwAlgPptpSamplingEnable[] | cdktf.IResolvable;
}

export function fwAlgPptpToTerraform(struct?: FwAlgPptpOutputReference | FwAlgPptp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_port_disable: cdktf.stringToTerraform(struct!.defaultPortDisable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(fwAlgPptpSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function fwAlgPptpToHclTerraform(struct?: FwAlgPptpOutputReference | FwAlgPptp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_port_disable: {
      value: cdktf.stringToHclTerraform(struct!.defaultPortDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(fwAlgPptpSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "FwAlgPptpSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwAlgPptpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwAlgPptp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPortDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPortDisable = this._defaultPortDisable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwAlgPptp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultPortDisable = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultPortDisable = value.defaultPortDisable;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // default_port_disable - computed: false, optional: true, required: false
  private _defaultPortDisable?: string; 
  public get defaultPortDisable() {
    return this.getStringAttribute('default_port_disable');
  }
  public set defaultPortDisable(value: string) {
    this._defaultPortDisable = value;
  }
  public resetDefaultPortDisable() {
    this._defaultPortDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPortDisableInput() {
    return this._defaultPortDisable;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new FwAlgPptpSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: FwAlgPptpSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface FwAlgRtspSamplingEnable {
  /**
  * 'all': all; 'transport-inserted': Transport Created; 'transport-freed': Transport Freed; 'transport-alloc-failure': Transport Alloc Failure; 'data-session-created': Data Session Created; 'data-session-freed': Data Session Freed; 'ext-creation-failure': Extension Creation Failure; 'transport-add-to-ext': Transport Added to Extension; 'transport-removed-from-ext': Transport Removed from Extension; 'transport-too-many': Too Many Transports for Control Conn; 'transport-already-in-ext': Transport Already in Extension; 'transport-exists': Transport Already Exists; 'transport-link-ext-failure-control': Transport Link to Extension Failure Control; 'transport-link-ext-data': Transport Link to Extension Data; 'transport-link-ext-failure-data': Transport Link to Extension Failure Data; 'transport-inserted-shadow': Transport Inserted Shadow; 'transport-creation-race': Transport Create Race; 'transport-alloc-failure-shadow': Transport Alloc Failure Shadow; 'transport-put-in-del-q': Transport Put in Delete Queue; 'transport-freed-shadow': Transport Freed Shadow; 'transport-acquired-from-control': Transport Acquired Control; 'transport-found-from-prev-control': Transport Found From Prev Control; 'transport-acquire-failure-from-control': Transport Acquire Failure Control; 'transport-released-from-control': Transport Released Control; 'transport-double-release-from-control': Transport Double Release Control; 'transport-acquired-from-data': Transport Acquired Data; 'transport-acquire-failure-from-data': Transport Acquire Failure Data; 'transport-released-from-data': Transport Released Data; 'transport-double-release-from-data': Transport Double Release Data; 'transport-retry-lookup-on-data-free': Transport Retry Lookup Data; 'transport-not-found-on-data-free': Transport Not Found Data; 'data-session-created-shadow': Data Session Created Shadow; 'data-session-freed-shadow': Data Session Freed Shadow; 'ha-control-ext-creation-failure': HA Control Extension Creation Failure; 'ha-control-session-created': HA Control Session Created; 'ha-data-session-created': HA Data Session Created;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#counters1 FwAlg#counters1}
  */
  readonly counters1?: string;
}

export function fwAlgRtspSamplingEnableToTerraform(struct?: FwAlgRtspSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function fwAlgRtspSamplingEnableToHclTerraform(struct?: FwAlgRtspSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwAlgRtspSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwAlgRtspSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwAlgRtspSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class FwAlgRtspSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : FwAlgRtspSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): FwAlgRtspSamplingEnableOutputReference {
    return new FwAlgRtspSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwAlgRtsp {
  /**
  * 'default-port-disable': Disable RTSP ALG default port 554;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#default_port_disable FwAlg#default_port_disable}
  */
  readonly defaultPortDisable?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#uuid FwAlg#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#sampling_enable FwAlg#sampling_enable}
  */
  readonly samplingEnable?: FwAlgRtspSamplingEnable[] | cdktf.IResolvable;
}

export function fwAlgRtspToTerraform(struct?: FwAlgRtspOutputReference | FwAlgRtsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_port_disable: cdktf.stringToTerraform(struct!.defaultPortDisable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(fwAlgRtspSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function fwAlgRtspToHclTerraform(struct?: FwAlgRtspOutputReference | FwAlgRtsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_port_disable: {
      value: cdktf.stringToHclTerraform(struct!.defaultPortDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(fwAlgRtspSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "FwAlgRtspSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwAlgRtspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwAlgRtsp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPortDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPortDisable = this._defaultPortDisable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwAlgRtsp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultPortDisable = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultPortDisable = value.defaultPortDisable;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // default_port_disable - computed: false, optional: true, required: false
  private _defaultPortDisable?: string; 
  public get defaultPortDisable() {
    return this.getStringAttribute('default_port_disable');
  }
  public set defaultPortDisable(value: string) {
    this._defaultPortDisable = value;
  }
  public resetDefaultPortDisable() {
    this._defaultPortDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPortDisableInput() {
    return this._defaultPortDisable;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new FwAlgRtspSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: FwAlgRtspSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface FwAlgSipSamplingEnable {
  /**
  * 'all': all; 'stat-request': Request Received; 'stat-response': Response Received; 'method-register': Method REGISTER; 'method-invite': Method INVITE; 'method-ack': Method ACK; 'method-cancel': Method CANCEL; 'method-bye': Method BYE; 'method-options': Method OPTIONS; 'method-prack': Method PRACK; 'method-subscribe': Method SUBSCRIBE; 'method-notify': Method NOTIFY; 'method-publish': Method PUBLISH; 'method-info': Method INFO; 'method-refer': Method REFER; 'method-message': Method MESSAGE; 'method-update': Method UPDATE; 'method-unknown': Method Unknown; 'parse-error': Message Parse Error; 'keep-alive': Keep Alive; 'contact-error': Contact Process Error; 'sdp-error': SDP Process Error; 'rtp-port-no-op': RTP Port No Op; 'rtp-rtcp-port-success': RTP RTCP Port Success; 'rtp-port-failure': RTP Port Failure; 'rtcp-port-failure': RTCP Port Failure; 'contact-port-no-op': Contact Port No Op; 'contact-port-success': Contact Port Success; 'contact-port-failure': Contact Port Failure; 'contact-new': Contact Alloc; 'contact-alloc-failure': Contact Alloc Failure; 'contact-eim': Contact EIM; 'contact-eim-set': Contact EIM Set; 'rtp-new': RTP Alloc; 'rtp-alloc-failure': RTP Alloc Failure; 'rtp-eim': RTP EIM; 'helper-found': SMP Helper Conn Found; 'helper-created': SMP Helper Conn Created; 'helper-deleted': SMP Helper Conn Already Deleted; 'helper-freed': SMP Helper Conn Freed; 'helper-failure': SMP Helper Failure;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#counters1 FwAlg#counters1}
  */
  readonly counters1?: string;
}

export function fwAlgSipSamplingEnableToTerraform(struct?: FwAlgSipSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function fwAlgSipSamplingEnableToHclTerraform(struct?: FwAlgSipSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwAlgSipSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwAlgSipSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwAlgSipSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class FwAlgSipSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : FwAlgSipSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): FwAlgSipSamplingEnableOutputReference {
    return new FwAlgSipSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwAlgSip {
  /**
  * 'default-port-disable': Disable SIP ALG default port 5060;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#default_port_disable FwAlg#default_port_disable}
  */
  readonly defaultPortDisable?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#uuid FwAlg#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#sampling_enable FwAlg#sampling_enable}
  */
  readonly samplingEnable?: FwAlgSipSamplingEnable[] | cdktf.IResolvable;
}

export function fwAlgSipToTerraform(struct?: FwAlgSipOutputReference | FwAlgSip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_port_disable: cdktf.stringToTerraform(struct!.defaultPortDisable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(fwAlgSipSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function fwAlgSipToHclTerraform(struct?: FwAlgSipOutputReference | FwAlgSip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_port_disable: {
      value: cdktf.stringToHclTerraform(struct!.defaultPortDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(fwAlgSipSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "FwAlgSipSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwAlgSipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwAlgSip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPortDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPortDisable = this._defaultPortDisable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwAlgSip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultPortDisable = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultPortDisable = value.defaultPortDisable;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // default_port_disable - computed: false, optional: true, required: false
  private _defaultPortDisable?: string; 
  public get defaultPortDisable() {
    return this.getStringAttribute('default_port_disable');
  }
  public set defaultPortDisable(value: string) {
    this._defaultPortDisable = value;
  }
  public resetDefaultPortDisable() {
    this._defaultPortDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPortDisableInput() {
    return this._defaultPortDisable;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new FwAlgSipSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: FwAlgSipSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface FwAlgTftpSamplingEnable {
  /**
  * 'all': all; 'session-created': TFTP Client Sessions Created; 'helper-created': TFTP Helper Sessions created; 'helper-freed': TFTP Helper Sessions freed; 'helper-freed-used': TFTP Helper Sessions freed used; 'helper-freed-unused': TFTP Helper Sessions freed unused; 'helper-already-used': TFTP Helper Session already used; 'helper-in-rml': TFTP Helper Session in Remove List;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#counters1 FwAlg#counters1}
  */
  readonly counters1?: string;
}

export function fwAlgTftpSamplingEnableToTerraform(struct?: FwAlgTftpSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function fwAlgTftpSamplingEnableToHclTerraform(struct?: FwAlgTftpSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwAlgTftpSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwAlgTftpSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwAlgTftpSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class FwAlgTftpSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : FwAlgTftpSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): FwAlgTftpSamplingEnableOutputReference {
    return new FwAlgTftpSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwAlgTftp {
  /**
  * 'default-port-disable': Disable TFTP ALG default port 69;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#default_port_disable FwAlg#default_port_disable}
  */
  readonly defaultPortDisable?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#uuid FwAlg#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#sampling_enable FwAlg#sampling_enable}
  */
  readonly samplingEnable?: FwAlgTftpSamplingEnable[] | cdktf.IResolvable;
}

export function fwAlgTftpToTerraform(struct?: FwAlgTftpOutputReference | FwAlgTftp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_port_disable: cdktf.stringToTerraform(struct!.defaultPortDisable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(fwAlgTftpSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function fwAlgTftpToHclTerraform(struct?: FwAlgTftpOutputReference | FwAlgTftp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_port_disable: {
      value: cdktf.stringToHclTerraform(struct!.defaultPortDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(fwAlgTftpSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "FwAlgTftpSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwAlgTftpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwAlgTftp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultPortDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPortDisable = this._defaultPortDisable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwAlgTftp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultPortDisable = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultPortDisable = value.defaultPortDisable;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // default_port_disable - computed: false, optional: true, required: false
  private _defaultPortDisable?: string; 
  public get defaultPortDisable() {
    return this.getStringAttribute('default_port_disable');
  }
  public set defaultPortDisable(value: string) {
    this._defaultPortDisable = value;
  }
  public resetDefaultPortDisable() {
    this._defaultPortDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPortDisableInput() {
    return this._defaultPortDisable;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new FwAlgTftpSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: FwAlgTftpSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg thunder_fw_alg}
*/
export class FwAlg extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_alg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FwAlg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FwAlg to import
  * @param importFromId The id of the existing FwAlg that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FwAlg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_alg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_alg thunder_fw_alg} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FwAlgConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FwAlgConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_alg',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._uuid = config.uuid;
    this._dns.internalValue = config.dns;
    this._esp.internalValue = config.esp;
    this._ftp.internalValue = config.ftp;
    this._icmp.internalValue = config.icmp;
    this._pptp.internalValue = config.pptp;
    this._rtsp.internalValue = config.rtsp;
    this._sip.internalValue = config.sip;
    this._tftp.internalValue = config.tftp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new FwAlgDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: FwAlgDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // esp - computed: false, optional: true, required: false
  private _esp = new FwAlgEspOutputReference(this, "esp");
  public get esp() {
    return this._esp;
  }
  public putEsp(value: FwAlgEsp) {
    this._esp.internalValue = value;
  }
  public resetEsp() {
    this._esp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espInput() {
    return this._esp.internalValue;
  }

  // ftp - computed: false, optional: true, required: false
  private _ftp = new FwAlgFtpOutputReference(this, "ftp");
  public get ftp() {
    return this._ftp;
  }
  public putFtp(value: FwAlgFtp) {
    this._ftp.internalValue = value;
  }
  public resetFtp() {
    this._ftp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpInput() {
    return this._ftp.internalValue;
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp = new FwAlgIcmpOutputReference(this, "icmp");
  public get icmp() {
    return this._icmp;
  }
  public putIcmp(value: FwAlgIcmp) {
    this._icmp.internalValue = value;
  }
  public resetIcmp() {
    this._icmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp.internalValue;
  }

  // pptp - computed: false, optional: true, required: false
  private _pptp = new FwAlgPptpOutputReference(this, "pptp");
  public get pptp() {
    return this._pptp;
  }
  public putPptp(value: FwAlgPptp) {
    this._pptp.internalValue = value;
  }
  public resetPptp() {
    this._pptp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pptpInput() {
    return this._pptp.internalValue;
  }

  // rtsp - computed: false, optional: true, required: false
  private _rtsp = new FwAlgRtspOutputReference(this, "rtsp");
  public get rtsp() {
    return this._rtsp;
  }
  public putRtsp(value: FwAlgRtsp) {
    this._rtsp.internalValue = value;
  }
  public resetRtsp() {
    this._rtsp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtspInput() {
    return this._rtsp.internalValue;
  }

  // sip - computed: false, optional: true, required: false
  private _sip = new FwAlgSipOutputReference(this, "sip");
  public get sip() {
    return this._sip;
  }
  public putSip(value: FwAlgSip) {
    this._sip.internalValue = value;
  }
  public resetSip() {
    this._sip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip.internalValue;
  }

  // tftp - computed: false, optional: true, required: false
  private _tftp = new FwAlgTftpOutputReference(this, "tftp");
  public get tftp() {
    return this._tftp;
  }
  public putTftp(value: FwAlgTftp) {
    this._tftp.internalValue = value;
  }
  public resetTftp() {
    this._tftp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpInput() {
    return this._tftp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      dns: fwAlgDnsToTerraform(this._dns.internalValue),
      esp: fwAlgEspToTerraform(this._esp.internalValue),
      ftp: fwAlgFtpToTerraform(this._ftp.internalValue),
      icmp: fwAlgIcmpToTerraform(this._icmp.internalValue),
      pptp: fwAlgPptpToTerraform(this._pptp.internalValue),
      rtsp: fwAlgRtspToTerraform(this._rtsp.internalValue),
      sip: fwAlgSipToTerraform(this._sip.internalValue),
      tftp: fwAlgTftpToTerraform(this._tftp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns: {
        value: fwAlgDnsToHclTerraform(this._dns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwAlgDnsList",
      },
      esp: {
        value: fwAlgEspToHclTerraform(this._esp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwAlgEspList",
      },
      ftp: {
        value: fwAlgFtpToHclTerraform(this._ftp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwAlgFtpList",
      },
      icmp: {
        value: fwAlgIcmpToHclTerraform(this._icmp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwAlgIcmpList",
      },
      pptp: {
        value: fwAlgPptpToHclTerraform(this._pptp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwAlgPptpList",
      },
      rtsp: {
        value: fwAlgRtspToHclTerraform(this._rtsp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwAlgRtspList",
      },
      sip: {
        value: fwAlgSipToHclTerraform(this._sip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwAlgSipList",
      },
      tftp: {
        value: fwAlgTftpToHclTerraform(this._tftp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwAlgTftpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

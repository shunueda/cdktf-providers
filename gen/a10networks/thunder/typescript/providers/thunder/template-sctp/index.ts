// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_sctp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateSctpConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable Checksum check;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_sctp#checksum_check TemplateSctp#checksum_check}
  */
  readonly checksumCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_sctp#id TemplateSctp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SCTP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_sctp#name TemplateSctp#name}
  */
  readonly name: string;
  /**
  * Set SCTP half-open timeout (SCTP half-open timeout in seconds (default 4))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_sctp#sctp_half_open_idle_timeout TemplateSctp#sctp_half_open_idle_timeout}
  */
  readonly sctpHalfOpenIdleTimeout?: number;
  /**
  * SCTP idle timeout in minutes (default 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_sctp#sctp_idle_timeout TemplateSctp#sctp_idle_timeout}
  */
  readonly sctpIdleTimeout?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_sctp#user_tag TemplateSctp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_sctp#uuid TemplateSctp#uuid}
  */
  readonly uuid?: string;
  /**
  * log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_sctp#log TemplateSctp#log}
  */
  readonly log?: TemplateSctpLog;
  /**
  * permit_payload_protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_sctp#permit_payload_protocol TemplateSctp#permit_payload_protocol}
  */
  readonly permitPayloadProtocol?: TemplateSctpPermitPayloadProtocol;
}
export interface TemplateSctpLog {
  /**
  * Log Payload Protocol IDs Filtered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_sctp#payload_proto_filtering TemplateSctp#payload_proto_filtering}
  */
  readonly payloadProtoFiltering?: number;
}

export function templateSctpLogToTerraform(struct?: TemplateSctpLogOutputReference | TemplateSctpLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    payload_proto_filtering: cdktf.numberToTerraform(struct!.payloadProtoFiltering),
  }
}


export function templateSctpLogToHclTerraform(struct?: TemplateSctpLogOutputReference | TemplateSctpLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    payload_proto_filtering: {
      value: cdktf.numberToHclTerraform(struct!.payloadProtoFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateSctpLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemplateSctpLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payloadProtoFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadProtoFiltering = this._payloadProtoFiltering;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateSctpLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._payloadProtoFiltering = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._payloadProtoFiltering = value.payloadProtoFiltering;
    }
  }

  // payload_proto_filtering - computed: false, optional: true, required: false
  private _payloadProtoFiltering?: number; 
  public get payloadProtoFiltering() {
    return this.getNumberAttribute('payload_proto_filtering');
  }
  public set payloadProtoFiltering(value: number) {
    this._payloadProtoFiltering = value;
  }
  public resetPayloadProtoFiltering() {
    this._payloadProtoFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadProtoFilteringInput() {
    return this._payloadProtoFiltering;
  }
}
export interface TemplateSctpPermitPayloadProtocolPermitConfigId {
  /**
  * Specify SCTP permitted payload protocol IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_sctp#protocol_id TemplateSctp#protocol_id}
  */
  readonly protocolId?: number;
}

export function templateSctpPermitPayloadProtocolPermitConfigIdToTerraform(struct?: TemplateSctpPermitPayloadProtocolPermitConfigId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol_id: cdktf.numberToTerraform(struct!.protocolId),
  }
}


export function templateSctpPermitPayloadProtocolPermitConfigIdToHclTerraform(struct?: TemplateSctpPermitPayloadProtocolPermitConfigId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol_id: {
      value: cdktf.numberToHclTerraform(struct!.protocolId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateSctpPermitPayloadProtocolPermitConfigIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateSctpPermitPayloadProtocolPermitConfigId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolId = this._protocolId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateSctpPermitPayloadProtocolPermitConfigId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocolId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocolId = value.protocolId;
    }
  }

  // protocol_id - computed: false, optional: true, required: false
  private _protocolId?: number; 
  public get protocolId() {
    return this.getNumberAttribute('protocol_id');
  }
  public set protocolId(value: number) {
    this._protocolId = value;
  }
  public resetProtocolId() {
    this._protocolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolIdInput() {
    return this._protocolId;
  }
}

export class TemplateSctpPermitPayloadProtocolPermitConfigIdList extends cdktf.ComplexList {
  public internalValue? : TemplateSctpPermitPayloadProtocolPermitConfigId[] | cdktf.IResolvable

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
  public get(index: number): TemplateSctpPermitPayloadProtocolPermitConfigIdOutputReference {
    return new TemplateSctpPermitPayloadProtocolPermitConfigIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateSctpPermitPayloadProtocolPermitConfigName {
  /**
  * 'iua': IUA; 'm2ua': M2UA; 'm3ua': M3UA; 'sua': SUA; 'm2pa': M2PA; 'h.323': H.323;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_sctp#protocol_name TemplateSctp#protocol_name}
  */
  readonly protocolName?: string;
}

export function templateSctpPermitPayloadProtocolPermitConfigNameToTerraform(struct?: TemplateSctpPermitPayloadProtocolPermitConfigName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol_name: cdktf.stringToTerraform(struct!.protocolName),
  }
}


export function templateSctpPermitPayloadProtocolPermitConfigNameToHclTerraform(struct?: TemplateSctpPermitPayloadProtocolPermitConfigName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol_name: {
      value: cdktf.stringToHclTerraform(struct!.protocolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateSctpPermitPayloadProtocolPermitConfigNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateSctpPermitPayloadProtocolPermitConfigName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolName = this._protocolName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateSctpPermitPayloadProtocolPermitConfigName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocolName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocolName = value.protocolName;
    }
  }

  // protocol_name - computed: false, optional: true, required: false
  private _protocolName?: string; 
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }
  public set protocolName(value: string) {
    this._protocolName = value;
  }
  public resetProtocolName() {
    this._protocolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolNameInput() {
    return this._protocolName;
  }
}

export class TemplateSctpPermitPayloadProtocolPermitConfigNameList extends cdktf.ComplexList {
  public internalValue? : TemplateSctpPermitPayloadProtocolPermitConfigName[] | cdktf.IResolvable

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
  public get(index: number): TemplateSctpPermitPayloadProtocolPermitConfigNameOutputReference {
    return new TemplateSctpPermitPayloadProtocolPermitConfigNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateSctpPermitPayloadProtocol {
  /**
  * permit_config_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_sctp#permit_config_id TemplateSctp#permit_config_id}
  */
  readonly permitConfigId?: TemplateSctpPermitPayloadProtocolPermitConfigId[] | cdktf.IResolvable;
  /**
  * permit_config_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_sctp#permit_config_name TemplateSctp#permit_config_name}
  */
  readonly permitConfigName?: TemplateSctpPermitPayloadProtocolPermitConfigName[] | cdktf.IResolvable;
}

export function templateSctpPermitPayloadProtocolToTerraform(struct?: TemplateSctpPermitPayloadProtocolOutputReference | TemplateSctpPermitPayloadProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permit_config_id: cdktf.listMapper(templateSctpPermitPayloadProtocolPermitConfigIdToTerraform, true)(struct!.permitConfigId),
    permit_config_name: cdktf.listMapper(templateSctpPermitPayloadProtocolPermitConfigNameToTerraform, true)(struct!.permitConfigName),
  }
}


export function templateSctpPermitPayloadProtocolToHclTerraform(struct?: TemplateSctpPermitPayloadProtocolOutputReference | TemplateSctpPermitPayloadProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permit_config_id: {
      value: cdktf.listMapperHcl(templateSctpPermitPayloadProtocolPermitConfigIdToHclTerraform, true)(struct!.permitConfigId),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateSctpPermitPayloadProtocolPermitConfigIdList",
    },
    permit_config_name: {
      value: cdktf.listMapperHcl(templateSctpPermitPayloadProtocolPermitConfigNameToHclTerraform, true)(struct!.permitConfigName),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateSctpPermitPayloadProtocolPermitConfigNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateSctpPermitPayloadProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemplateSctpPermitPayloadProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permitConfigId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitConfigId = this._permitConfigId?.internalValue;
    }
    if (this._permitConfigName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitConfigName = this._permitConfigName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateSctpPermitPayloadProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._permitConfigId.internalValue = undefined;
      this._permitConfigName.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._permitConfigId.internalValue = value.permitConfigId;
      this._permitConfigName.internalValue = value.permitConfigName;
    }
  }

  // permit_config_id - computed: false, optional: true, required: false
  private _permitConfigId = new TemplateSctpPermitPayloadProtocolPermitConfigIdList(this, "permit_config_id", false);
  public get permitConfigId() {
    return this._permitConfigId;
  }
  public putPermitConfigId(value: TemplateSctpPermitPayloadProtocolPermitConfigId[] | cdktf.IResolvable) {
    this._permitConfigId.internalValue = value;
  }
  public resetPermitConfigId() {
    this._permitConfigId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitConfigIdInput() {
    return this._permitConfigId.internalValue;
  }

  // permit_config_name - computed: false, optional: true, required: false
  private _permitConfigName = new TemplateSctpPermitPayloadProtocolPermitConfigNameList(this, "permit_config_name", false);
  public get permitConfigName() {
    return this._permitConfigName;
  }
  public putPermitConfigName(value: TemplateSctpPermitPayloadProtocolPermitConfigName[] | cdktf.IResolvable) {
    this._permitConfigName.internalValue = value;
  }
  public resetPermitConfigName() {
    this._permitConfigName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitConfigNameInput() {
    return this._permitConfigName.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_sctp thunder_template_sctp}
*/
export class TemplateSctp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_template_sctp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateSctp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateSctp to import
  * @param importFromId The id of the existing TemplateSctp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_sctp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateSctp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_template_sctp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_sctp thunder_template_sctp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateSctpConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateSctpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_template_sctp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checksumCheck = config.checksumCheck;
    this._id = config.id;
    this._name = config.name;
    this._sctpHalfOpenIdleTimeout = config.sctpHalfOpenIdleTimeout;
    this._sctpIdleTimeout = config.sctpIdleTimeout;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._log.internalValue = config.log;
    this._permitPayloadProtocol.internalValue = config.permitPayloadProtocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksum_check - computed: false, optional: true, required: false
  private _checksumCheck?: string; 
  public get checksumCheck() {
    return this.getStringAttribute('checksum_check');
  }
  public set checksumCheck(value: string) {
    this._checksumCheck = value;
  }
  public resetChecksumCheck() {
    this._checksumCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumCheckInput() {
    return this._checksumCheck;
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

  // sctp_half_open_idle_timeout - computed: false, optional: true, required: false
  private _sctpHalfOpenIdleTimeout?: number; 
  public get sctpHalfOpenIdleTimeout() {
    return this.getNumberAttribute('sctp_half_open_idle_timeout');
  }
  public set sctpHalfOpenIdleTimeout(value: number) {
    this._sctpHalfOpenIdleTimeout = value;
  }
  public resetSctpHalfOpenIdleTimeout() {
    this._sctpHalfOpenIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpHalfOpenIdleTimeoutInput() {
    return this._sctpHalfOpenIdleTimeout;
  }

  // sctp_idle_timeout - computed: false, optional: true, required: false
  private _sctpIdleTimeout?: number; 
  public get sctpIdleTimeout() {
    return this.getNumberAttribute('sctp_idle_timeout');
  }
  public set sctpIdleTimeout(value: number) {
    this._sctpIdleTimeout = value;
  }
  public resetSctpIdleTimeout() {
    this._sctpIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpIdleTimeoutInput() {
    return this._sctpIdleTimeout;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // log - computed: false, optional: true, required: false
  private _log = new TemplateSctpLogOutputReference(this, "log");
  public get log() {
    return this._log;
  }
  public putLog(value: TemplateSctpLog) {
    this._log.internalValue = value;
  }
  public resetLog() {
    this._log.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log.internalValue;
  }

  // permit_payload_protocol - computed: false, optional: true, required: false
  private _permitPayloadProtocol = new TemplateSctpPermitPayloadProtocolOutputReference(this, "permit_payload_protocol");
  public get permitPayloadProtocol() {
    return this._permitPayloadProtocol;
  }
  public putPermitPayloadProtocol(value: TemplateSctpPermitPayloadProtocol) {
    this._permitPayloadProtocol.internalValue = value;
  }
  public resetPermitPayloadProtocol() {
    this._permitPayloadProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPayloadProtocolInput() {
    return this._permitPayloadProtocol.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      checksum_check: cdktf.stringToTerraform(this._checksumCheck),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      sctp_half_open_idle_timeout: cdktf.numberToTerraform(this._sctpHalfOpenIdleTimeout),
      sctp_idle_timeout: cdktf.numberToTerraform(this._sctpIdleTimeout),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      log: templateSctpLogToTerraform(this._log.internalValue),
      permit_payload_protocol: templateSctpPermitPayloadProtocolToTerraform(this._permitPayloadProtocol.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      checksum_check: {
        value: cdktf.stringToHclTerraform(this._checksumCheck),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sctp_half_open_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._sctpHalfOpenIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sctp_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._sctpIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      log: {
        value: templateSctpLogToHclTerraform(this._log.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateSctpLogList",
      },
      permit_payload_protocol: {
        value: templateSctpPermitPayloadProtocolToHclTerraform(this._permitPayloadProtocol.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateSctpPermitPayloadProtocolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

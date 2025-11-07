// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_http_basic_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationRelayHttpBasicInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify user domain, default is null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_http_basic_instance#domain AamAuthenticationRelayHttpBasicInstance#domain}
  */
  readonly domain?: string;
  /**
  * 'user-principal-name': Append domain with User Principal Name format. (e.g. user@domain); 'down-level-logon-name': Append domain with Down-Level Logon Name format. (e.g. domain-user);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_http_basic_instance#domain_format AamAuthenticationRelayHttpBasicInstance#domain_format}
  */
  readonly domainFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_http_basic_instance#id AamAuthenticationRelayHttpBasicInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify HTTP basic authentication relay name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_http_basic_instance#name AamAuthenticationRelayHttpBasicInstance#name}
  */
  readonly name: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_http_basic_instance#packet_capture_template AamAuthenticationRelayHttpBasicInstance#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_http_basic_instance#uuid AamAuthenticationRelayHttpBasicInstance#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_http_basic_instance#sampling_enable AamAuthenticationRelayHttpBasicInstance#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationRelayHttpBasicInstanceSamplingEnable[] | cdktf.IResolvable;
}
export interface AamAuthenticationRelayHttpBasicInstanceSamplingEnable {
  /**
  * 'all': all; 'success': Success; 'no-creds': No Credential; 'bad-req': Bad Request; 'unauth': Unauthorized; 'forbidden': Forbidden; 'not-found': Not Found; 'server-error': Internal Server Error; 'unavailable': Service Unavailable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_http_basic_instance#counters1 AamAuthenticationRelayHttpBasicInstance#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationRelayHttpBasicInstanceSamplingEnableToTerraform(struct?: AamAuthenticationRelayHttpBasicInstanceSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationRelayHttpBasicInstanceSamplingEnableToHclTerraform(struct?: AamAuthenticationRelayHttpBasicInstanceSamplingEnable | cdktf.IResolvable): any {
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

export class AamAuthenticationRelayHttpBasicInstanceSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationRelayHttpBasicInstanceSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AamAuthenticationRelayHttpBasicInstanceSamplingEnable | cdktf.IResolvable | undefined) {
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

export class AamAuthenticationRelayHttpBasicInstanceSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationRelayHttpBasicInstanceSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationRelayHttpBasicInstanceSamplingEnableOutputReference {
    return new AamAuthenticationRelayHttpBasicInstanceSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_http_basic_instance thunder_aam_authentication_relay_http_basic_instance}
*/
export class AamAuthenticationRelayHttpBasicInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_relay_http_basic_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationRelayHttpBasicInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationRelayHttpBasicInstance to import
  * @param importFromId The id of the existing AamAuthenticationRelayHttpBasicInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_http_basic_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationRelayHttpBasicInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_relay_http_basic_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_http_basic_instance thunder_aam_authentication_relay_http_basic_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationRelayHttpBasicInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationRelayHttpBasicInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_relay_http_basic_instance',
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
    this._domain = config.domain;
    this._domainFormat = config.domainFormat;
    this._id = config.id;
    this._name = config.name;
    this._packetCaptureTemplate = config.packetCaptureTemplate;
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_format - computed: false, optional: true, required: false
  private _domainFormat?: string; 
  public get domainFormat() {
    return this.getStringAttribute('domain_format');
  }
  public set domainFormat(value: string) {
    this._domainFormat = value;
  }
  public resetDomainFormat() {
    this._domainFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainFormatInput() {
    return this._domainFormat;
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

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
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
  private _samplingEnable = new AamAuthenticationRelayHttpBasicInstanceSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationRelayHttpBasicInstanceSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      domain_format: cdktf.stringToTerraform(this._domainFormat),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      packet_capture_template: cdktf.stringToTerraform(this._packetCaptureTemplate),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(aamAuthenticationRelayHttpBasicInstanceSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_format: {
        value: cdktf.stringToHclTerraform(this._domainFormat),
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
      packet_capture_template: {
        value: cdktf.stringToHclTerraform(this._packetCaptureTemplate),
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
      sampling_enable: {
        value: cdktf.listMapperHcl(aamAuthenticationRelayHttpBasicInstanceSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationRelayHttpBasicInstanceSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy_packet_capturing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dns_cache_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy_packet_capturing#dns_cache_name DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingA#dns_cache_name}
  */
  readonly dnsCacheName: string;
  /**
  * Domain_list_policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy_packet_capturing#domain_list_policy_name DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingA#domain_list_policy_name}
  */
  readonly domainListPolicyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy_packet_capturing#id DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy_packet_capturing#uuid DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingA#uuid}
  */
  readonly uuid?: string;
  /**
  * root_zone_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy_packet_capturing#root_zone_list DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingA#root_zone_list}
  */
  readonly rootZoneList?: DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructA[] | cdktf.IResolvable;
}
export interface DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructA {
  /**
  * Capture-config name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy_packet_capturing#capture_config DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingA#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * 'regular': Capture packet anyway; 'capture-on-failure': Capture packet if last XFR was failed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy_packet_capturing#capture_mode DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingA#capture_mode}
  */
  readonly captureMode?: string;
  /**
  * Specify root zone to be captured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy_packet_capturing#root_zone DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingA#root_zone}
  */
  readonly rootZone?: string;
}

export function ddosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructAToTerraform(struct?: DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_config: cdktf.stringToTerraform(struct!.captureConfig),
    capture_mode: cdktf.stringToTerraform(struct!.captureMode),
    root_zone: cdktf.stringToTerraform(struct!.rootZone),
  }
}


export function ddosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructAToHclTerraform(struct?: DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_config: {
      value: cdktf.stringToHclTerraform(struct!.captureConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capture_mode: {
      value: cdktf.stringToHclTerraform(struct!.captureMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_zone: {
      value: cdktf.stringToHclTerraform(struct!.rootZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureConfig = this._captureConfig;
    }
    if (this._captureMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureMode = this._captureMode;
    }
    if (this._rootZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootZone = this._rootZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._captureConfig = undefined;
      this._captureMode = undefined;
      this._rootZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._captureConfig = value.captureConfig;
      this._captureMode = value.captureMode;
      this._rootZone = value.rootZone;
    }
  }

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig?: string; 
  public get captureConfig() {
    return this.getStringAttribute('capture_config');
  }
  public set captureConfig(value: string) {
    this._captureConfig = value;
  }
  public resetCaptureConfig() {
    this._captureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig;
  }

  // capture_mode - computed: false, optional: true, required: false
  private _captureMode?: string; 
  public get captureMode() {
    return this.getStringAttribute('capture_mode');
  }
  public set captureMode(value: string) {
    this._captureMode = value;
  }
  public resetCaptureMode() {
    this._captureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureModeInput() {
    return this._captureMode;
  }

  // root_zone - computed: false, optional: true, required: false
  private _rootZone?: string; 
  public get rootZone() {
    return this.getStringAttribute('root_zone');
  }
  public set rootZone(value: string) {
    this._rootZone = value;
  }
  public resetRootZone() {
    this._rootZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootZoneInput() {
    return this._rootZone;
  }
}

export class DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructAList extends cdktf.ComplexList {
  public internalValue? : DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructA[] | cdktf.IResolvable

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
  public get(index: number): DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructAOutputReference {
    return new DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy_packet_capturing thunder_ddos_dns_cache_domain_group_domain_list_policy_packet_capturing}
*/
export class DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dns_cache_domain_group_domain_list_policy_packet_capturing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingA to import
  * @param importFromId The id of the existing DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy_packet_capturing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dns_cache_domain_group_domain_list_policy_packet_capturing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dns_cache_domain_group_domain_list_policy_packet_capturing thunder_ddos_dns_cache_domain_group_domain_list_policy_packet_capturing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dns_cache_domain_group_domain_list_policy_packet_capturing',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsCacheName = config.dnsCacheName;
    this._domainListPolicyName = config.domainListPolicyName;
    this._id = config.id;
    this._uuid = config.uuid;
    this._rootZoneList.internalValue = config.rootZoneList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_cache_name - computed: false, optional: false, required: true
  private _dnsCacheName?: string; 
  public get dnsCacheName() {
    return this.getStringAttribute('dns_cache_name');
  }
  public set dnsCacheName(value: string) {
    this._dnsCacheName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheNameInput() {
    return this._dnsCacheName;
  }

  // domain_list_policy_name - computed: false, optional: false, required: true
  private _domainListPolicyName?: string; 
  public get domainListPolicyName() {
    return this.getStringAttribute('domain_list_policy_name');
  }
  public set domainListPolicyName(value: string) {
    this._domainListPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListPolicyNameInput() {
    return this._domainListPolicyName;
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

  // root_zone_list - computed: false, optional: true, required: false
  private _rootZoneList = new DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructAList(this, "root_zone_list", false);
  public get rootZoneList() {
    return this._rootZoneList;
  }
  public putRootZoneList(value: DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructA[] | cdktf.IResolvable) {
    this._rootZoneList.internalValue = value;
  }
  public resetRootZoneList() {
    this._rootZoneList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootZoneListInput() {
    return this._rootZoneList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_cache_name: cdktf.stringToTerraform(this._dnsCacheName),
      domain_list_policy_name: cdktf.stringToTerraform(this._domainListPolicyName),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      root_zone_list: cdktf.listMapper(ddosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructAToTerraform, true)(this._rootZoneList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_cache_name: {
        value: cdktf.stringToHclTerraform(this._dnsCacheName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_list_policy_name: {
        value: cdktf.stringToHclTerraform(this._domainListPolicyName),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_zone_list: {
        value: cdktf.listMapperHcl(ddosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructAToHclTerraform, true)(this._rootZoneList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDnsCacheDomainGroupDomainListPolicyPacketCapturingRootZoneListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

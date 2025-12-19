// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThreatIntelThreatListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable all categories
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list#all_categories ThreatIntelThreatList#all_categories}
  */
  readonly allCategories?: number;
  /**
  * Botnet C&C channels, and infected zombie machines controlled by Bot master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list#botnets ThreatIntelThreatList#botnets}
  */
  readonly botnets?: number;
  /**
  * IP's participating in DOS, DDOS, anomalous sync flood, and anomalous traffic detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list#dos_attacks ThreatIntelThreatList#dos_attacks}
  */
  readonly dosAttacks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list#id ThreatIntelThreatList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP's associated with mobile threats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list#mobile_threats ThreatIntelThreatList#mobile_threats}
  */
  readonly mobileThreats?: number;
  /**
  * Threat category List name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list#name ThreatIntelThreatList#name}
  */
  readonly name: string;
  /**
  * IP addresses hosting phishing sites, ad click fraud or gaming fraud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list#phishing ThreatIntelThreatList#phishing}
  */
  readonly phishing?: number;
  /**
  * IP addresses providing proxy services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list#proxy ThreatIntelThreatList#proxy}
  */
  readonly proxy?: number;
  /**
  * IP addresses currently known to be infected with malware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list#reputation ThreatIntelThreatList#reputation}
  */
  readonly reputation?: number;
  /**
  * IP's associated with probes, host scan, domain scan, and password brute force attack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list#scanners ThreatIntelThreatList#scanners}
  */
  readonly scanners?: number;
  /**
  * IP's tunneling spam messages through a proxy, anomalous SMTP activities, and forum spam activities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list#spam_sources ThreatIntelThreatList#spam_sources}
  */
  readonly spamSources?: number;
  /**
  * IP's providing tor proxy services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list#tor_proxy ThreatIntelThreatList#tor_proxy}
  */
  readonly torProxy?: number;
  /**
  * 'webroot': Configure Webroot threat categories;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list#type ThreatIntelThreatList#type}
  */
  readonly type?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list#user_tag ThreatIntelThreatList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list#uuid ThreatIntelThreatList#uuid}
  */
  readonly uuid?: string;
  /**
  * IP's associated with cross site scripting, iFrame injection, SQL injection, cross domain injection, or domain password brute fo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list#web_attacks ThreatIntelThreatList#web_attacks}
  */
  readonly webAttacks?: number;
  /**
  * IP's associated with malware, shell code, rootkits, worms or viruses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list#windows_exploits ThreatIntelThreatList#windows_exploits}
  */
  readonly windowsExploits?: number;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list#sampling_enable ThreatIntelThreatList#sampling_enable}
  */
  readonly samplingEnable?: ThreatIntelThreatListSamplingEnable[] | cdktf.IResolvable;
}
export interface ThreatIntelThreatListSamplingEnable {
  /**
  * 'all': all; 'spam-sources': Hits for spam sources; 'windows-exploits': Hits for windows exploits; 'web-attacks': Hits for web attacks; 'botnets': Hits for botnets; 'scanners': Hits for scanners; 'dos-attacks': Hits for dos attacks; 'reputation': Hits for reputation; 'phishing': Hits for phishing; 'proxy': Hits for proxy; 'mobile-threats': Hits for mobile threats; 'tor-proxy': Hits for tor-proxy; 'total-hits': Total hits for threat-list;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list#counters1 ThreatIntelThreatList#counters1}
  */
  readonly counters1?: string;
}

export function threatIntelThreatListSamplingEnableToTerraform(struct?: ThreatIntelThreatListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function threatIntelThreatListSamplingEnableToHclTerraform(struct?: ThreatIntelThreatListSamplingEnable | cdktf.IResolvable): any {
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

export class ThreatIntelThreatListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ThreatIntelThreatListSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ThreatIntelThreatListSamplingEnable | cdktf.IResolvable | undefined) {
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

export class ThreatIntelThreatListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : ThreatIntelThreatListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): ThreatIntelThreatListSamplingEnableOutputReference {
    return new ThreatIntelThreatListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list thunder_threat_intel_threat_list}
*/
export class ThreatIntelThreatList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_threat_intel_threat_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ThreatIntelThreatList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ThreatIntelThreatList to import
  * @param importFromId The id of the existing ThreatIntelThreatList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ThreatIntelThreatList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_threat_intel_threat_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/threat_intel_threat_list thunder_threat_intel_threat_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThreatIntelThreatListConfig
  */
  public constructor(scope: Construct, id: string, config: ThreatIntelThreatListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_threat_intel_threat_list',
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
    this._allCategories = config.allCategories;
    this._botnets = config.botnets;
    this._dosAttacks = config.dosAttacks;
    this._id = config.id;
    this._mobileThreats = config.mobileThreats;
    this._name = config.name;
    this._phishing = config.phishing;
    this._proxy = config.proxy;
    this._reputation = config.reputation;
    this._scanners = config.scanners;
    this._spamSources = config.spamSources;
    this._torProxy = config.torProxy;
    this._type = config.type;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._webAttacks = config.webAttacks;
    this._windowsExploits = config.windowsExploits;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_categories - computed: false, optional: true, required: false
  private _allCategories?: number; 
  public get allCategories() {
    return this.getNumberAttribute('all_categories');
  }
  public set allCategories(value: number) {
    this._allCategories = value;
  }
  public resetAllCategories() {
    this._allCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allCategoriesInput() {
    return this._allCategories;
  }

  // botnets - computed: false, optional: true, required: false
  private _botnets?: number; 
  public get botnets() {
    return this.getNumberAttribute('botnets');
  }
  public set botnets(value: number) {
    this._botnets = value;
  }
  public resetBotnets() {
    this._botnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botnetsInput() {
    return this._botnets;
  }

  // dos_attacks - computed: false, optional: true, required: false
  private _dosAttacks?: number; 
  public get dosAttacks() {
    return this.getNumberAttribute('dos_attacks');
  }
  public set dosAttacks(value: number) {
    this._dosAttacks = value;
  }
  public resetDosAttacks() {
    this._dosAttacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosAttacksInput() {
    return this._dosAttacks;
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

  // mobile_threats - computed: false, optional: true, required: false
  private _mobileThreats?: number; 
  public get mobileThreats() {
    return this.getNumberAttribute('mobile_threats');
  }
  public set mobileThreats(value: number) {
    this._mobileThreats = value;
  }
  public resetMobileThreats() {
    this._mobileThreats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileThreatsInput() {
    return this._mobileThreats;
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

  // phishing - computed: false, optional: true, required: false
  private _phishing?: number; 
  public get phishing() {
    return this.getNumberAttribute('phishing');
  }
  public set phishing(value: number) {
    this._phishing = value;
  }
  public resetPhishing() {
    this._phishing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phishingInput() {
    return this._phishing;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: number; 
  public get proxy() {
    return this.getNumberAttribute('proxy');
  }
  public set proxy(value: number) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // reputation - computed: false, optional: true, required: false
  private _reputation?: number; 
  public get reputation() {
    return this.getNumberAttribute('reputation');
  }
  public set reputation(value: number) {
    this._reputation = value;
  }
  public resetReputation() {
    this._reputation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationInput() {
    return this._reputation;
  }

  // scanners - computed: false, optional: true, required: false
  private _scanners?: number; 
  public get scanners() {
    return this.getNumberAttribute('scanners');
  }
  public set scanners(value: number) {
    this._scanners = value;
  }
  public resetScanners() {
    this._scanners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scannersInput() {
    return this._scanners;
  }

  // spam_sources - computed: false, optional: true, required: false
  private _spamSources?: number; 
  public get spamSources() {
    return this.getNumberAttribute('spam_sources');
  }
  public set spamSources(value: number) {
    this._spamSources = value;
  }
  public resetSpamSources() {
    this._spamSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamSourcesInput() {
    return this._spamSources;
  }

  // tor_proxy - computed: false, optional: true, required: false
  private _torProxy?: number; 
  public get torProxy() {
    return this.getNumberAttribute('tor_proxy');
  }
  public set torProxy(value: number) {
    this._torProxy = value;
  }
  public resetTorProxy() {
    this._torProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get torProxyInput() {
    return this._torProxy;
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

  // web_attacks - computed: false, optional: true, required: false
  private _webAttacks?: number; 
  public get webAttacks() {
    return this.getNumberAttribute('web_attacks');
  }
  public set webAttacks(value: number) {
    this._webAttacks = value;
  }
  public resetWebAttacks() {
    this._webAttacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAttacksInput() {
    return this._webAttacks;
  }

  // windows_exploits - computed: false, optional: true, required: false
  private _windowsExploits?: number; 
  public get windowsExploits() {
    return this.getNumberAttribute('windows_exploits');
  }
  public set windowsExploits(value: number) {
    this._windowsExploits = value;
  }
  public resetWindowsExploits() {
    this._windowsExploits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsExploitsInput() {
    return this._windowsExploits;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new ThreatIntelThreatListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: ThreatIntelThreatListSamplingEnable[] | cdktf.IResolvable) {
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
      all_categories: cdktf.numberToTerraform(this._allCategories),
      botnets: cdktf.numberToTerraform(this._botnets),
      dos_attacks: cdktf.numberToTerraform(this._dosAttacks),
      id: cdktf.stringToTerraform(this._id),
      mobile_threats: cdktf.numberToTerraform(this._mobileThreats),
      name: cdktf.stringToTerraform(this._name),
      phishing: cdktf.numberToTerraform(this._phishing),
      proxy: cdktf.numberToTerraform(this._proxy),
      reputation: cdktf.numberToTerraform(this._reputation),
      scanners: cdktf.numberToTerraform(this._scanners),
      spam_sources: cdktf.numberToTerraform(this._spamSources),
      tor_proxy: cdktf.numberToTerraform(this._torProxy),
      type: cdktf.stringToTerraform(this._type),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      web_attacks: cdktf.numberToTerraform(this._webAttacks),
      windows_exploits: cdktf.numberToTerraform(this._windowsExploits),
      sampling_enable: cdktf.listMapper(threatIntelThreatListSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_categories: {
        value: cdktf.numberToHclTerraform(this._allCategories),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      botnets: {
        value: cdktf.numberToHclTerraform(this._botnets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dos_attacks: {
        value: cdktf.numberToHclTerraform(this._dosAttacks),
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
      mobile_threats: {
        value: cdktf.numberToHclTerraform(this._mobileThreats),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phishing: {
        value: cdktf.numberToHclTerraform(this._phishing),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy: {
        value: cdktf.numberToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reputation: {
        value: cdktf.numberToHclTerraform(this._reputation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scanners: {
        value: cdktf.numberToHclTerraform(this._scanners),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spam_sources: {
        value: cdktf.numberToHclTerraform(this._spamSources),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tor_proxy: {
        value: cdktf.numberToHclTerraform(this._torProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      web_attacks: {
        value: cdktf.numberToHclTerraform(this._webAttacks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      windows_exploits: {
        value: cdktf.numberToHclTerraform(this._windowsExploits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(threatIntelThreatListSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ThreatIntelThreatListSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

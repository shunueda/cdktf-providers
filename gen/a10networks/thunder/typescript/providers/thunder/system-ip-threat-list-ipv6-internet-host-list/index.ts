// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list_ipv6_internet_host_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemIpThreatListIpv6InternetHostListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list_ipv6_internet_host_list#id SystemIpThreatListIpv6InternetHostList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list_ipv6_internet_host_list#uuid SystemIpThreatListIpv6InternetHostList#uuid}
  */
  readonly uuid?: string;
  /**
  * Bind exception-list (class-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list_ipv6_internet_host_list#white_list SystemIpThreatListIpv6InternetHostList#white_list}
  */
  readonly whiteList?: string;
  /**
  * class_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list_ipv6_internet_host_list#class_list_cfg SystemIpThreatListIpv6InternetHostList#class_list_cfg}
  */
  readonly classListCfg?: SystemIpThreatListIpv6InternetHostListClassListCfgA[] | cdktf.IResolvable;
}
export interface SystemIpThreatListIpv6InternetHostListClassListCfgA {
  /**
  * Bind class-list (class-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list_ipv6_internet_host_list#class_list SystemIpThreatListIpv6InternetHostList#class_list}
  */
  readonly classList?: string;
  /**
  * Bind ip-threat-action Template (ip-threat-action Template number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list_ipv6_internet_host_list#ip_threat_action_tmpl SystemIpThreatListIpv6InternetHostList#ip_threat_action_tmpl}
  */
  readonly ipThreatActionTmpl?: number;
}

export function systemIpThreatListIpv6InternetHostListClassListCfgAToTerraform(struct?: SystemIpThreatListIpv6InternetHostListClassListCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list: cdktf.stringToTerraform(struct!.classList),
    ip_threat_action_tmpl: cdktf.numberToTerraform(struct!.ipThreatActionTmpl),
  }
}


export function systemIpThreatListIpv6InternetHostListClassListCfgAToHclTerraform(struct?: SystemIpThreatListIpv6InternetHostListClassListCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_threat_action_tmpl: {
      value: cdktf.numberToHclTerraform(struct!.ipThreatActionTmpl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv6InternetHostListClassListCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpThreatListIpv6InternetHostListClassListCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._ipThreatActionTmpl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatActionTmpl = this._ipThreatActionTmpl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv6InternetHostListClassListCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classList = undefined;
      this._ipThreatActionTmpl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classList = value.classList;
      this._ipThreatActionTmpl = value.ipThreatActionTmpl;
    }
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // ip_threat_action_tmpl - computed: false, optional: true, required: false
  private _ipThreatActionTmpl?: number; 
  public get ipThreatActionTmpl() {
    return this.getNumberAttribute('ip_threat_action_tmpl');
  }
  public set ipThreatActionTmpl(value: number) {
    this._ipThreatActionTmpl = value;
  }
  public resetIpThreatActionTmpl() {
    this._ipThreatActionTmpl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatActionTmplInput() {
    return this._ipThreatActionTmpl;
  }
}

export class SystemIpThreatListIpv6InternetHostListClassListCfgAList extends cdktf.ComplexList {
  public internalValue? : SystemIpThreatListIpv6InternetHostListClassListCfgA[] | cdktf.IResolvable

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
  public get(index: number): SystemIpThreatListIpv6InternetHostListClassListCfgAOutputReference {
    return new SystemIpThreatListIpv6InternetHostListClassListCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list_ipv6_internet_host_list thunder_system_ip_threat_list_ipv6_internet_host_list}
*/
export class SystemIpThreatListIpv6InternetHostList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_ip_threat_list_ipv6_internet_host_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemIpThreatListIpv6InternetHostList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemIpThreatListIpv6InternetHostList to import
  * @param importFromId The id of the existing SystemIpThreatListIpv6InternetHostList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list_ipv6_internet_host_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemIpThreatListIpv6InternetHostList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_ip_threat_list_ipv6_internet_host_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list_ipv6_internet_host_list thunder_system_ip_threat_list_ipv6_internet_host_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemIpThreatListIpv6InternetHostListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemIpThreatListIpv6InternetHostListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_ip_threat_list_ipv6_internet_host_list',
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
    this._id = config.id;
    this._uuid = config.uuid;
    this._whiteList = config.whiteList;
    this._classListCfg.internalValue = config.classListCfg;
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

  // white_list - computed: false, optional: true, required: false
  private _whiteList?: string; 
  public get whiteList() {
    return this.getStringAttribute('white_list');
  }
  public set whiteList(value: string) {
    this._whiteList = value;
  }
  public resetWhiteList() {
    this._whiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListInput() {
    return this._whiteList;
  }

  // class_list_cfg - computed: false, optional: true, required: false
  private _classListCfg = new SystemIpThreatListIpv6InternetHostListClassListCfgAList(this, "class_list_cfg", false);
  public get classListCfg() {
    return this._classListCfg;
  }
  public putClassListCfg(value: SystemIpThreatListIpv6InternetHostListClassListCfgA[] | cdktf.IResolvable) {
    this._classListCfg.internalValue = value;
  }
  public resetClassListCfg() {
    this._classListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListCfgInput() {
    return this._classListCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      white_list: cdktf.stringToTerraform(this._whiteList),
      class_list_cfg: cdktf.listMapper(systemIpThreatListIpv6InternetHostListClassListCfgAToTerraform, true)(this._classListCfg.internalValue),
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
      white_list: {
        value: cdktf.stringToHclTerraform(this._whiteList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_list_cfg: {
        value: cdktf.listMapperHcl(systemIpThreatListIpv6InternetHostListClassListCfgAToHclTerraform, true)(this._classListCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpThreatListIpv6InternetHostListClassListCfgAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

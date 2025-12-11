// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_serveraccesspriorities
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmupdateServeraccessprioritiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_serveraccesspriorities#access_public FmupdateServeraccesspriorities#access_public}
  */
  readonly accessPublic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_serveraccesspriorities#av_ips FmupdateServeraccesspriorities#av_ips}
  */
  readonly avIps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_serveraccesspriorities#dynamic_sort_subtable FmupdateServeraccesspriorities#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_serveraccesspriorities#id FmupdateServeraccesspriorities#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_serveraccesspriorities#web_spam FmupdateServeraccesspriorities#web_spam}
  */
  readonly webSpam?: string;
  /**
  * private_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_serveraccesspriorities#private_server FmupdateServeraccesspriorities#private_server}
  */
  readonly privateServer?: FmupdateServeraccessprioritiesPrivateServer[] | cdktf.IResolvable;
}
export interface FmupdateServeraccessprioritiesPrivateServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_serveraccesspriorities#id FmupdateServeraccesspriorities#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_serveraccesspriorities#ip FmupdateServeraccesspriorities#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_serveraccesspriorities#ip6 FmupdateServeraccesspriorities#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_serveraccesspriorities#time_zone FmupdateServeraccesspriorities#time_zone}
  */
  readonly timeZone?: number;
}

export function fmupdateServeraccessprioritiesPrivateServerToTerraform(struct?: FmupdateServeraccessprioritiesPrivateServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip6: cdktf.stringToTerraform(struct!.ip6),
    time_zone: cdktf.numberToTerraform(struct!.timeZone),
  }
}


export function fmupdateServeraccessprioritiesPrivateServerToHclTerraform(struct?: FmupdateServeraccessprioritiesPrivateServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6: {
      value: cdktf.stringToHclTerraform(struct!.ip6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.numberToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FmupdateServeraccessprioritiesPrivateServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FmupdateServeraccessprioritiesPrivateServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6 = this._ip6;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FmupdateServeraccessprioritiesPrivateServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._ip6 = undefined;
      this._timeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ip = value.ip;
      this._ip6 = value.ip6;
      this._timeZone = value.timeZone;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip6 - computed: true, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: number; 
  public get timeZone() {
    return this.getNumberAttribute('time_zone');
  }
  public set timeZone(value: number) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}

export class FmupdateServeraccessprioritiesPrivateServerList extends cdktf.ComplexList {
  public internalValue? : FmupdateServeraccessprioritiesPrivateServer[] | cdktf.IResolvable

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
  public get(index: number): FmupdateServeraccessprioritiesPrivateServerOutputReference {
    return new FmupdateServeraccessprioritiesPrivateServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_serveraccesspriorities fortianalyzer_fmupdate_serveraccesspriorities}
*/
export class FmupdateServeraccesspriorities extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_fmupdate_serveraccesspriorities";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FmupdateServeraccesspriorities resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FmupdateServeraccesspriorities to import
  * @param importFromId The id of the existing FmupdateServeraccesspriorities that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_serveraccesspriorities#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FmupdateServeraccesspriorities to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_fmupdate_serveraccesspriorities", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_serveraccesspriorities fortianalyzer_fmupdate_serveraccesspriorities} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmupdateServeraccessprioritiesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FmupdateServeraccessprioritiesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_fmupdate_serveraccesspriorities',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessPublic = config.accessPublic;
    this._avIps = config.avIps;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._webSpam = config.webSpam;
    this._privateServer.internalValue = config.privateServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_public - computed: true, optional: true, required: false
  private _accessPublic?: string; 
  public get accessPublic() {
    return this.getStringAttribute('access_public');
  }
  public set accessPublic(value: string) {
    this._accessPublic = value;
  }
  public resetAccessPublic() {
    this._accessPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPublicInput() {
    return this._accessPublic;
  }

  // av_ips - computed: true, optional: true, required: false
  private _avIps?: string; 
  public get avIps() {
    return this.getStringAttribute('av_ips');
  }
  public set avIps(value: string) {
    this._avIps = value;
  }
  public resetAvIps() {
    this._avIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avIpsInput() {
    return this._avIps;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // web_spam - computed: true, optional: true, required: false
  private _webSpam?: string; 
  public get webSpam() {
    return this.getStringAttribute('web_spam');
  }
  public set webSpam(value: string) {
    this._webSpam = value;
  }
  public resetWebSpam() {
    this._webSpam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSpamInput() {
    return this._webSpam;
  }

  // private_server - computed: false, optional: true, required: false
  private _privateServer = new FmupdateServeraccessprioritiesPrivateServerList(this, "private_server", false);
  public get privateServer() {
    return this._privateServer;
  }
  public putPrivateServer(value: FmupdateServeraccessprioritiesPrivateServer[] | cdktf.IResolvable) {
    this._privateServer.internalValue = value;
  }
  public resetPrivateServer() {
    this._privateServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateServerInput() {
    return this._privateServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_public: cdktf.stringToTerraform(this._accessPublic),
      av_ips: cdktf.stringToTerraform(this._avIps),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      web_spam: cdktf.stringToTerraform(this._webSpam),
      private_server: cdktf.listMapper(fmupdateServeraccessprioritiesPrivateServerToTerraform, true)(this._privateServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_public: {
        value: cdktf.stringToHclTerraform(this._accessPublic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_ips: {
        value: cdktf.stringToHclTerraform(this._avIps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      web_spam: {
        value: cdktf.stringToHclTerraform(this._webSpam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_server: {
        value: cdktf.listMapperHcl(fmupdateServeraccessprioritiesPrivateServerToHclTerraform, true)(this._privateServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FmupdateServeraccessprioritiesPrivateServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

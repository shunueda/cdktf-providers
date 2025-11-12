// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemApiuserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser#accprofile SystemApiuser#accprofile}
  */
  readonly accprofile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser#api_key SystemApiuser#api_key}
  */
  readonly apiKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser#comments SystemApiuser#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser#cors_allow_origin SystemApiuser#cors_allow_origin}
  */
  readonly corsAllowOrigin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser#device_name SystemApiuser#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser#dynamic_sort_subtable SystemApiuser#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser#id SystemApiuser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser#name SystemApiuser#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser#peer_auth SystemApiuser#peer_auth}
  */
  readonly peerAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser#peer_group SystemApiuser#peer_group}
  */
  readonly peerGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser#schedule SystemApiuser#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser#vdom SystemApiuser#vdom}
  */
  readonly vdom?: string[];
  /**
  * trusthost block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser#trusthost SystemApiuser#trusthost}
  */
  readonly trusthost?: SystemApiuserTrusthost[] | cdktf.IResolvable;
}
export interface SystemApiuserTrusthost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser#id SystemApiuser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser#ipv4_trusthost SystemApiuser#ipv4_trusthost}
  */
  readonly ipv4Trusthost?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser#ipv6_trusthost SystemApiuser#ipv6_trusthost}
  */
  readonly ipv6Trusthost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser#type SystemApiuser#type}
  */
  readonly type?: string;
}

export function systemApiuserTrusthostToTerraform(struct?: SystemApiuserTrusthost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ipv4_trusthost: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv4Trusthost),
    ipv6_trusthost: cdktf.stringToTerraform(struct!.ipv6Trusthost),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemApiuserTrusthostToHclTerraform(struct?: SystemApiuserTrusthost | cdktf.IResolvable): any {
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
    ipv4_trusthost: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv4Trusthost),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_trusthost: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Trusthost),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemApiuserTrusthostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemApiuserTrusthost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipv4Trusthost !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Trusthost = this._ipv4Trusthost;
    }
    if (this._ipv6Trusthost !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Trusthost = this._ipv6Trusthost;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemApiuserTrusthost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ipv4Trusthost = undefined;
      this._ipv6Trusthost = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ipv4Trusthost = value.ipv4Trusthost;
      this._ipv6Trusthost = value.ipv6Trusthost;
      this._type = value.type;
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

  // ipv4_trusthost - computed: true, optional: true, required: false
  private _ipv4Trusthost?: string[]; 
  public get ipv4Trusthost() {
    return this.getListAttribute('ipv4_trusthost');
  }
  public set ipv4Trusthost(value: string[]) {
    this._ipv4Trusthost = value;
  }
  public resetIpv4Trusthost() {
    this._ipv4Trusthost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TrusthostInput() {
    return this._ipv4Trusthost;
  }

  // ipv6_trusthost - computed: true, optional: true, required: false
  private _ipv6Trusthost?: string; 
  public get ipv6Trusthost() {
    return this.getStringAttribute('ipv6_trusthost');
  }
  public set ipv6Trusthost(value: string) {
    this._ipv6Trusthost = value;
  }
  public resetIpv6Trusthost() {
    this._ipv6Trusthost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TrusthostInput() {
    return this._ipv6Trusthost;
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
}

export class SystemApiuserTrusthostList extends cdktf.ComplexList {
  public internalValue? : SystemApiuserTrusthost[] | cdktf.IResolvable

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
  public get(index: number): SystemApiuserTrusthostOutputReference {
    return new SystemApiuserTrusthostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser fmgdevice_system_apiuser}
*/
export class SystemApiuser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_apiuser";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemApiuser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemApiuser to import
  * @param importFromId The id of the existing SystemApiuser that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemApiuser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_apiuser", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_apiuser fmgdevice_system_apiuser} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemApiuserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemApiuserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_apiuser',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accprofile = config.accprofile;
    this._apiKey = config.apiKey;
    this._comments = config.comments;
    this._corsAllowOrigin = config.corsAllowOrigin;
    this._deviceName = config.deviceName;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._name = config.name;
    this._peerAuth = config.peerAuth;
    this._peerGroup = config.peerGroup;
    this._schedule = config.schedule;
    this._vdom = config.vdom;
    this._trusthost.internalValue = config.trusthost;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accprofile - computed: true, optional: true, required: false
  private _accprofile?: string[]; 
  public get accprofile() {
    return cdktf.Fn.tolist(this.getListAttribute('accprofile'));
  }
  public set accprofile(value: string[]) {
    this._accprofile = value;
  }
  public resetAccprofile() {
    this._accprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accprofileInput() {
    return this._accprofile;
  }

  // api_key - computed: true, optional: true, required: false
  private _apiKey?: string[]; 
  public get apiKey() {
    return cdktf.Fn.tolist(this.getListAttribute('api_key'));
  }
  public set apiKey(value: string[]) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // cors_allow_origin - computed: false, optional: true, required: false
  private _corsAllowOrigin?: string; 
  public get corsAllowOrigin() {
    return this.getStringAttribute('cors_allow_origin');
  }
  public set corsAllowOrigin(value: string) {
    this._corsAllowOrigin = value;
  }
  public resetCorsAllowOrigin() {
    this._corsAllowOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsAllowOriginInput() {
    return this._corsAllowOrigin;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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

  // name - computed: false, optional: true, required: false
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

  // peer_auth - computed: true, optional: true, required: false
  private _peerAuth?: string; 
  public get peerAuth() {
    return this.getStringAttribute('peer_auth');
  }
  public set peerAuth(value: string) {
    this._peerAuth = value;
  }
  public resetPeerAuth() {
    this._peerAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAuthInput() {
    return this._peerAuth;
  }

  // peer_group - computed: true, optional: true, required: false
  private _peerGroup?: string[]; 
  public get peerGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('peer_group'));
  }
  public set peerGroup(value: string[]) {
    this._peerGroup = value;
  }
  public resetPeerGroup() {
    this._peerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupInput() {
    return this._peerGroup;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // vdom - computed: true, optional: true, required: false
  private _vdom?: string[]; 
  public get vdom() {
    return cdktf.Fn.tolist(this.getListAttribute('vdom'));
  }
  public set vdom(value: string[]) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // trusthost - computed: false, optional: true, required: false
  private _trusthost = new SystemApiuserTrusthostList(this, "trusthost", false);
  public get trusthost() {
    return this._trusthost;
  }
  public putTrusthost(value: SystemApiuserTrusthost[] | cdktf.IResolvable) {
    this._trusthost.internalValue = value;
  }
  public resetTrusthost() {
    this._trusthost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthostInput() {
    return this._trusthost.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accprofile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accprofile),
      api_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiKey),
      comments: cdktf.stringToTerraform(this._comments),
      cors_allow_origin: cdktf.stringToTerraform(this._corsAllowOrigin),
      device_name: cdktf.stringToTerraform(this._deviceName),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      peer_auth: cdktf.stringToTerraform(this._peerAuth),
      peer_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peerGroup),
      schedule: cdktf.stringToTerraform(this._schedule),
      vdom: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vdom),
      trusthost: cdktf.listMapper(systemApiuserTrusthostToTerraform, true)(this._trusthost.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accprofile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accprofile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      api_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apiKey),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cors_allow_origin: {
        value: cdktf.stringToHclTerraform(this._corsAllowOrigin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_auth: {
        value: cdktf.stringToHclTerraform(this._peerAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peerGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vdom),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      trusthost: {
        value: cdktf.listMapperHcl(systemApiuserTrusthostToHclTerraform, true)(this._trusthost.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemApiuserTrusthostList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

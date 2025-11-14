// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extendercontroller_extenderprofile_lanextension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectExtendercontrollerExtenderprofileLanextensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extendercontroller_extenderprofile_lanextension#adom ObjectExtendercontrollerExtenderprofileLanextension#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extendercontroller_extenderprofile_lanextension#backhaul_interface ObjectExtendercontrollerExtenderprofileLanextension#backhaul_interface}
  */
  readonly backhaulInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extendercontroller_extenderprofile_lanextension#backhaul_ip ObjectExtendercontrollerExtenderprofileLanextension#backhaul_ip}
  */
  readonly backhaulIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extendercontroller_extenderprofile_lanextension#dynamic_sort_subtable ObjectExtendercontrollerExtenderprofileLanextension#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extendercontroller_extenderprofile_lanextension#extender_profile ObjectExtendercontrollerExtenderprofileLanextension#extender_profile}
  */
  readonly extenderProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extendercontroller_extenderprofile_lanextension#id ObjectExtendercontrollerExtenderprofileLanextension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extendercontroller_extenderprofile_lanextension#ipsec_tunnel ObjectExtendercontrollerExtenderprofileLanextension#ipsec_tunnel}
  */
  readonly ipsecTunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extendercontroller_extenderprofile_lanextension#link_loadbalance ObjectExtendercontrollerExtenderprofileLanextension#link_loadbalance}
  */
  readonly linkLoadbalance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extendercontroller_extenderprofile_lanextension#scopetype ObjectExtendercontrollerExtenderprofileLanextension#scopetype}
  */
  readonly scopetype?: string;
  /**
  * backhaul block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extendercontroller_extenderprofile_lanextension#backhaul ObjectExtendercontrollerExtenderprofileLanextension#backhaul}
  */
  readonly backhaul?: ObjectExtendercontrollerExtenderprofileLanextensionBackhaul[] | cdktf.IResolvable;
}
export interface ObjectExtendercontrollerExtenderprofileLanextensionBackhaul {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extendercontroller_extenderprofile_lanextension#name ObjectExtendercontrollerExtenderprofileLanextension#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extendercontroller_extenderprofile_lanextension#port ObjectExtendercontrollerExtenderprofileLanextension#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extendercontroller_extenderprofile_lanextension#role ObjectExtendercontrollerExtenderprofileLanextension#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extendercontroller_extenderprofile_lanextension#weight ObjectExtendercontrollerExtenderprofileLanextension#weight}
  */
  readonly weight?: number;
}

export function objectExtendercontrollerExtenderprofileLanextensionBackhaulToTerraform(struct?: ObjectExtendercontrollerExtenderprofileLanextensionBackhaul | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
    role: cdktf.stringToTerraform(struct!.role),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function objectExtendercontrollerExtenderprofileLanextensionBackhaulToHclTerraform(struct?: ObjectExtendercontrollerExtenderprofileLanextensionBackhaul | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtendercontrollerExtenderprofileLanextensionBackhaulOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectExtendercontrollerExtenderprofileLanextensionBackhaul | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectExtendercontrollerExtenderprofileLanextensionBackhaul | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._role = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
      this._role = value.role;
      this._weight = value.weight;
    }
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

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ObjectExtendercontrollerExtenderprofileLanextensionBackhaulList extends cdktf.ComplexList {
  public internalValue? : ObjectExtendercontrollerExtenderprofileLanextensionBackhaul[] | cdktf.IResolvable

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
  public get(index: number): ObjectExtendercontrollerExtenderprofileLanextensionBackhaulOutputReference {
    return new ObjectExtendercontrollerExtenderprofileLanextensionBackhaulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extendercontroller_extenderprofile_lanextension fortimanager_object_extendercontroller_extenderprofile_lanextension}
*/
export class ObjectExtendercontrollerExtenderprofileLanextension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_extendercontroller_extenderprofile_lanextension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectExtendercontrollerExtenderprofileLanextension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectExtendercontrollerExtenderprofileLanextension to import
  * @param importFromId The id of the existing ObjectExtendercontrollerExtenderprofileLanextension that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extendercontroller_extenderprofile_lanextension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectExtendercontrollerExtenderprofileLanextension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_extendercontroller_extenderprofile_lanextension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_extendercontroller_extenderprofile_lanextension fortimanager_object_extendercontroller_extenderprofile_lanextension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectExtendercontrollerExtenderprofileLanextensionConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectExtendercontrollerExtenderprofileLanextensionConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_extendercontroller_extenderprofile_lanextension',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._backhaulInterface = config.backhaulInterface;
    this._backhaulIp = config.backhaulIp;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._extenderProfile = config.extenderProfile;
    this._id = config.id;
    this._ipsecTunnel = config.ipsecTunnel;
    this._linkLoadbalance = config.linkLoadbalance;
    this._scopetype = config.scopetype;
    this._backhaul.internalValue = config.backhaul;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // backhaul_interface - computed: false, optional: true, required: false
  private _backhaulInterface?: string; 
  public get backhaulInterface() {
    return this.getStringAttribute('backhaul_interface');
  }
  public set backhaulInterface(value: string) {
    this._backhaulInterface = value;
  }
  public resetBackhaulInterface() {
    this._backhaulInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backhaulInterfaceInput() {
    return this._backhaulInterface;
  }

  // backhaul_ip - computed: false, optional: true, required: false
  private _backhaulIp?: string; 
  public get backhaulIp() {
    return this.getStringAttribute('backhaul_ip');
  }
  public set backhaulIp(value: string) {
    this._backhaulIp = value;
  }
  public resetBackhaulIp() {
    this._backhaulIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backhaulIpInput() {
    return this._backhaulIp;
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

  // extender_profile - computed: false, optional: false, required: true
  private _extenderProfile?: string; 
  public get extenderProfile() {
    return this.getStringAttribute('extender_profile');
  }
  public set extenderProfile(value: string) {
    this._extenderProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extenderProfileInput() {
    return this._extenderProfile;
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

  // ipsec_tunnel - computed: false, optional: true, required: false
  private _ipsecTunnel?: string; 
  public get ipsecTunnel() {
    return this.getStringAttribute('ipsec_tunnel');
  }
  public set ipsecTunnel(value: string) {
    this._ipsecTunnel = value;
  }
  public resetIpsecTunnel() {
    this._ipsecTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecTunnelInput() {
    return this._ipsecTunnel;
  }

  // link_loadbalance - computed: true, optional: true, required: false
  private _linkLoadbalance?: string; 
  public get linkLoadbalance() {
    return this.getStringAttribute('link_loadbalance');
  }
  public set linkLoadbalance(value: string) {
    this._linkLoadbalance = value;
  }
  public resetLinkLoadbalance() {
    this._linkLoadbalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkLoadbalanceInput() {
    return this._linkLoadbalance;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // backhaul - computed: false, optional: true, required: false
  private _backhaul = new ObjectExtendercontrollerExtenderprofileLanextensionBackhaulList(this, "backhaul", false);
  public get backhaul() {
    return this._backhaul;
  }
  public putBackhaul(value: ObjectExtendercontrollerExtenderprofileLanextensionBackhaul[] | cdktf.IResolvable) {
    this._backhaul.internalValue = value;
  }
  public resetBackhaul() {
    this._backhaul.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backhaulInput() {
    return this._backhaul.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      backhaul_interface: cdktf.stringToTerraform(this._backhaulInterface),
      backhaul_ip: cdktf.stringToTerraform(this._backhaulIp),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      extender_profile: cdktf.stringToTerraform(this._extenderProfile),
      id: cdktf.stringToTerraform(this._id),
      ipsec_tunnel: cdktf.stringToTerraform(this._ipsecTunnel),
      link_loadbalance: cdktf.stringToTerraform(this._linkLoadbalance),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      backhaul: cdktf.listMapper(objectExtendercontrollerExtenderprofileLanextensionBackhaulToTerraform, true)(this._backhaul.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backhaul_interface: {
        value: cdktf.stringToHclTerraform(this._backhaulInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backhaul_ip: {
        value: cdktf.stringToHclTerraform(this._backhaulIp),
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
      extender_profile: {
        value: cdktf.stringToHclTerraform(this._extenderProfile),
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
      ipsec_tunnel: {
        value: cdktf.stringToHclTerraform(this._ipsecTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_loadbalance: {
        value: cdktf.stringToHclTerraform(this._linkLoadbalance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backhaul: {
        value: cdktf.listMapperHcl(objectExtendercontrollerExtenderprofileLanextensionBackhaulToHclTerraform, true)(this._backhaul.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectExtendercontrollerExtenderprofileLanextensionBackhaulList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

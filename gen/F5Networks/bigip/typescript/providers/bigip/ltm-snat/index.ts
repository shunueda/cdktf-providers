// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_snat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmSnatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether to automatically map last hop for pools or not. The default is to use next level's defaul
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_snat#autolasthop LtmSnat#autolasthop}
  */
  readonly autolasthop?: string;
  /**
  * Fullpath 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_snat#full_path LtmSnat#full_path}
  */
  readonly fullPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_snat#id LtmSnat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enables or disables mirroring of SNAT connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_snat#mirror LtmSnat#mirror}
  */
  readonly mirror?: string;
  /**
  * Name of the SNAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_snat#name LtmSnat#name}
  */
  readonly name: string;
  /**
  * Partition or path to which the SNAT belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_snat#partition LtmSnat#partition}
  */
  readonly partition?: string;
  /**
  * Specifies an existing SNAT pool to which you want to map the client IP address. When you select SNAT Pool, you also select an existing SNAT pool from the associated list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_snat#snatpool LtmSnat#snatpool}
  */
  readonly snatpool?: string;
  /**
  * Specifies how the SNAT object handles the client's source port. The default is Preserve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_snat#sourceport LtmSnat#sourceport}
  */
  readonly sourceport?: string;
  /**
  * Specifies a particular IP address that you want the SNAT to use as a translation address. When you select IP Address, you also type the IP address in the associated text box
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_snat#translation LtmSnat#translation}
  */
  readonly translation?: string;
  /**
  * Specifies the VLANs or tunnels for which the SNAT is enabled or disabled. The default is All
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_snat#vlans LtmSnat#vlans}
  */
  readonly vlans?: string[];
  /**
  * Disables the SNAT on all VLANs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_snat#vlansdisabled LtmSnat#vlansdisabled}
  */
  readonly vlansdisabled?: boolean | cdktf.IResolvable;
  /**
  * origins block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_snat#origins LtmSnat#origins}
  */
  readonly origins: LtmSnatOrigins[] | cdktf.IResolvable;
}
export interface LtmSnatOrigins {
  /**
  * app service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_snat#app_service LtmSnat#app_service}
  */
  readonly appService?: string;
  /**
  * Name of origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_snat#name LtmSnat#name}
  */
  readonly name?: string;
}

export function ltmSnatOriginsToTerraform(struct?: LtmSnatOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_service: cdktf.stringToTerraform(struct!.appService),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ltmSnatOriginsToHclTerraform(struct?: LtmSnatOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_service: {
      value: cdktf.stringToHclTerraform(struct!.appService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LtmSnatOriginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LtmSnatOrigins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appService !== undefined) {
      hasAnyValues = true;
      internalValueResult.appService = this._appService;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LtmSnatOrigins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appService = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appService = value.appService;
      this._name = value.name;
    }
  }

  // app_service - computed: false, optional: true, required: false
  private _appService?: string; 
  public get appService() {
    return this.getStringAttribute('app_service');
  }
  public set appService(value: string) {
    this._appService = value;
  }
  public resetAppService() {
    this._appService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceInput() {
    return this._appService;
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
}

export class LtmSnatOriginsList extends cdktf.ComplexList {
  public internalValue? : LtmSnatOrigins[] | cdktf.IResolvable

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
  public get(index: number): LtmSnatOriginsOutputReference {
    return new LtmSnatOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_snat bigip_ltm_snat}
*/
export class LtmSnat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_snat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmSnat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmSnat to import
  * @param importFromId The id of the existing LtmSnat that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_snat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmSnat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_snat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_snat bigip_ltm_snat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmSnatConfig
  */
  public constructor(scope: Construct, id: string, config: LtmSnatConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_snat',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autolasthop = config.autolasthop;
    this._fullPath = config.fullPath;
    this._id = config.id;
    this._mirror = config.mirror;
    this._name = config.name;
    this._partition = config.partition;
    this._snatpool = config.snatpool;
    this._sourceport = config.sourceport;
    this._translation = config.translation;
    this._vlans = config.vlans;
    this._vlansdisabled = config.vlansdisabled;
    this._origins.internalValue = config.origins;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autolasthop - computed: true, optional: true, required: false
  private _autolasthop?: string; 
  public get autolasthop() {
    return this.getStringAttribute('autolasthop');
  }
  public set autolasthop(value: string) {
    this._autolasthop = value;
  }
  public resetAutolasthop() {
    this._autolasthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autolasthopInput() {
    return this._autolasthop;
  }

  // full_path - computed: false, optional: true, required: false
  private _fullPath?: string; 
  public get fullPath() {
    return this.getStringAttribute('full_path');
  }
  public set fullPath(value: string) {
    this._fullPath = value;
  }
  public resetFullPath() {
    this._fullPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullPathInput() {
    return this._fullPath;
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

  // mirror - computed: true, optional: true, required: false
  private _mirror?: string; 
  public get mirror() {
    return this.getStringAttribute('mirror');
  }
  public set mirror(value: string) {
    this._mirror = value;
  }
  public resetMirror() {
    this._mirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror;
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

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // snatpool - computed: false, optional: true, required: false
  private _snatpool?: string; 
  public get snatpool() {
    return this.getStringAttribute('snatpool');
  }
  public set snatpool(value: string) {
    this._snatpool = value;
  }
  public resetSnatpool() {
    this._snatpool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatpoolInput() {
    return this._snatpool;
  }

  // sourceport - computed: false, optional: true, required: false
  private _sourceport?: string; 
  public get sourceport() {
    return this.getStringAttribute('sourceport');
  }
  public set sourceport(value: string) {
    this._sourceport = value;
  }
  public resetSourceport() {
    this._sourceport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceportInput() {
    return this._sourceport;
  }

  // translation - computed: false, optional: true, required: false
  private _translation?: string; 
  public get translation() {
    return this.getStringAttribute('translation');
  }
  public set translation(value: string) {
    this._translation = value;
  }
  public resetTranslation() {
    this._translation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translationInput() {
    return this._translation;
  }

  // vlans - computed: false, optional: true, required: false
  private _vlans?: string[]; 
  public get vlans() {
    return cdktf.Fn.tolist(this.getListAttribute('vlans'));
  }
  public set vlans(value: string[]) {
    this._vlans = value;
  }
  public resetVlans() {
    this._vlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans;
  }

  // vlansdisabled - computed: false, optional: true, required: false
  private _vlansdisabled?: boolean | cdktf.IResolvable; 
  public get vlansdisabled() {
    return this.getBooleanAttribute('vlansdisabled');
  }
  public set vlansdisabled(value: boolean | cdktf.IResolvable) {
    this._vlansdisabled = value;
  }
  public resetVlansdisabled() {
    this._vlansdisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansdisabledInput() {
    return this._vlansdisabled;
  }

  // origins - computed: false, optional: false, required: true
  private _origins = new LtmSnatOriginsList(this, "origins", false);
  public get origins() {
    return this._origins;
  }
  public putOrigins(value: LtmSnatOrigins[] | cdktf.IResolvable) {
    this._origins.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originsInput() {
    return this._origins.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autolasthop: cdktf.stringToTerraform(this._autolasthop),
      full_path: cdktf.stringToTerraform(this._fullPath),
      id: cdktf.stringToTerraform(this._id),
      mirror: cdktf.stringToTerraform(this._mirror),
      name: cdktf.stringToTerraform(this._name),
      partition: cdktf.stringToTerraform(this._partition),
      snatpool: cdktf.stringToTerraform(this._snatpool),
      sourceport: cdktf.stringToTerraform(this._sourceport),
      translation: cdktf.stringToTerraform(this._translation),
      vlans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vlans),
      vlansdisabled: cdktf.booleanToTerraform(this._vlansdisabled),
      origins: cdktf.listMapper(ltmSnatOriginsToTerraform, true)(this._origins.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autolasthop: {
        value: cdktf.stringToHclTerraform(this._autolasthop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_path: {
        value: cdktf.stringToHclTerraform(this._fullPath),
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
      mirror: {
        value: cdktf.stringToHclTerraform(this._mirror),
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
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snatpool: {
        value: cdktf.stringToHclTerraform(this._snatpool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sourceport: {
        value: cdktf.stringToHclTerraform(this._sourceport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translation: {
        value: cdktf.stringToHclTerraform(this._translation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vlans),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vlansdisabled: {
        value: cdktf.booleanToHclTerraform(this._vlansdisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      origins: {
        value: cdktf.listMapperHcl(ltmSnatOriginsToHclTerraform, true)(this._origins.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LtmSnatOriginsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

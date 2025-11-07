// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciL4L7DeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#active DataAciL4L7Device#active}
  */
  readonly active?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#annotation DataAciL4L7Device#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#context_aware DataAciL4L7Device#context_aware}
  */
  readonly contextAware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#description DataAciL4L7Device#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#device_type DataAciL4L7Device#device_type}
  */
  readonly deviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#function_type DataAciL4L7Device#function_type}
  */
  readonly functionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#id DataAciL4L7Device#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#is_copy DataAciL4L7Device#is_copy}
  */
  readonly isCopy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#managed DataAciL4L7Device#managed}
  */
  readonly managed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#mode DataAciL4L7Device#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#name DataAciL4L7Device#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#name_alias DataAciL4L7Device#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#promiscuous_mode DataAciL4L7Device#promiscuous_mode}
  */
  readonly promiscuousMode?: string;
  /**
  * Create relation to phys:DomP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#relation_vns_rs_al_dev_to_phys_dom_p DataAciL4L7Device#relation_vns_rs_al_dev_to_phys_dom_p}
  */
  readonly relationVnsRsAlDevToPhysDomP?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#service_type DataAciL4L7Device#service_type}
  */
  readonly serviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#tenant_dn DataAciL4L7Device#tenant_dn}
  */
  readonly tenantDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#trunking DataAciL4L7Device#trunking}
  */
  readonly trunking?: string;
  /**
  * relation_vns_rs_al_dev_to_dom_p block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#relation_vns_rs_al_dev_to_dom_p DataAciL4L7Device#relation_vns_rs_al_dev_to_dom_p}
  */
  readonly relationVnsRsAlDevToDomP?: DataAciL4L7DeviceRelationVnsRsAlDevToDomP;
}
export interface DataAciL4L7DeviceRelationVnsRsAlDevToDomP {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#domain_dn DataAciL4L7Device#domain_dn}
  */
  readonly domainDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#switching_mode DataAciL4L7Device#switching_mode}
  */
  readonly switchingMode?: string;
}

export function dataAciL4L7DeviceRelationVnsRsAlDevToDomPToTerraform(struct?: DataAciL4L7DeviceRelationVnsRsAlDevToDomPOutputReference | DataAciL4L7DeviceRelationVnsRsAlDevToDomP): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_dn: cdktf.stringToTerraform(struct!.domainDn),
    switching_mode: cdktf.stringToTerraform(struct!.switchingMode),
  }
}


export function dataAciL4L7DeviceRelationVnsRsAlDevToDomPToHclTerraform(struct?: DataAciL4L7DeviceRelationVnsRsAlDevToDomPOutputReference | DataAciL4L7DeviceRelationVnsRsAlDevToDomP): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_dn: {
      value: cdktf.stringToHclTerraform(struct!.domainDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switching_mode: {
      value: cdktf.stringToHclTerraform(struct!.switchingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAciL4L7DeviceRelationVnsRsAlDevToDomPOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAciL4L7DeviceRelationVnsRsAlDevToDomP | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainDn = this._domainDn;
    }
    if (this._switchingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchingMode = this._switchingMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciL4L7DeviceRelationVnsRsAlDevToDomP | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainDn = undefined;
      this._switchingMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainDn = value.domainDn;
      this._switchingMode = value.switchingMode;
    }
  }

  // domain_dn - computed: false, optional: true, required: false
  private _domainDn?: string; 
  public get domainDn() {
    return this.getStringAttribute('domain_dn');
  }
  public set domainDn(value: string) {
    this._domainDn = value;
  }
  public resetDomainDn() {
    this._domainDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainDnInput() {
    return this._domainDn;
  }

  // switching_mode - computed: false, optional: true, required: false
  private _switchingMode?: string; 
  public get switchingMode() {
    return this.getStringAttribute('switching_mode');
  }
  public set switchingMode(value: string) {
    this._switchingMode = value;
  }
  public resetSwitchingMode() {
    this._switchingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchingModeInput() {
    return this._switchingMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device aci_l4_l7_device}
*/
export class DataAciL4L7Device extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l4_l7_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciL4L7Device resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciL4L7Device to import
  * @param importFromId The id of the existing DataAciL4L7Device that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciL4L7Device to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l4_l7_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l4_l7_device aci_l4_l7_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciL4L7DeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciL4L7DeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l4_l7_device',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._annotation = config.annotation;
    this._contextAware = config.contextAware;
    this._description = config.description;
    this._deviceType = config.deviceType;
    this._functionType = config.functionType;
    this._id = config.id;
    this._isCopy = config.isCopy;
    this._managed = config.managed;
    this._mode = config.mode;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._promiscuousMode = config.promiscuousMode;
    this._relationVnsRsAlDevToPhysDomP = config.relationVnsRsAlDevToPhysDomP;
    this._serviceType = config.serviceType;
    this._tenantDn = config.tenantDn;
    this._trunking = config.trunking;
    this._relationVnsRsAlDevToDomP.internalValue = config.relationVnsRsAlDevToDomP;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: true, required: false
  private _active?: string; 
  public get active() {
    return this.getStringAttribute('active');
  }
  public set active(value: string) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // context_aware - computed: true, optional: true, required: false
  private _contextAware?: string; 
  public get contextAware() {
    return this.getStringAttribute('context_aware');
  }
  public set contextAware(value: string) {
    this._contextAware = value;
  }
  public resetContextAware() {
    this._contextAware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextAwareInput() {
    return this._contextAware;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_type - computed: true, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // function_type - computed: true, optional: true, required: false
  private _functionType?: string; 
  public get functionType() {
    return this.getStringAttribute('function_type');
  }
  public set functionType(value: string) {
    this._functionType = value;
  }
  public resetFunctionType() {
    this._functionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionTypeInput() {
    return this._functionType;
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

  // is_copy - computed: true, optional: true, required: false
  private _isCopy?: string; 
  public get isCopy() {
    return this.getStringAttribute('is_copy');
  }
  public set isCopy(value: string) {
    this._isCopy = value;
  }
  public resetIsCopy() {
    this._isCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCopyInput() {
    return this._isCopy;
  }

  // managed - computed: true, optional: true, required: false
  private _managed?: string; 
  public get managed() {
    return this.getStringAttribute('managed');
  }
  public set managed(value: string) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // promiscuous_mode - computed: true, optional: true, required: false
  private _promiscuousMode?: string; 
  public get promiscuousMode() {
    return this.getStringAttribute('promiscuous_mode');
  }
  public set promiscuousMode(value: string) {
    this._promiscuousMode = value;
  }
  public resetPromiscuousMode() {
    this._promiscuousMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promiscuousModeInput() {
    return this._promiscuousMode;
  }

  // relation_vns_rs_al_dev_to_phys_dom_p - computed: false, optional: true, required: false
  private _relationVnsRsAlDevToPhysDomP?: string; 
  public get relationVnsRsAlDevToPhysDomP() {
    return this.getStringAttribute('relation_vns_rs_al_dev_to_phys_dom_p');
  }
  public set relationVnsRsAlDevToPhysDomP(value: string) {
    this._relationVnsRsAlDevToPhysDomP = value;
  }
  public resetRelationVnsRsAlDevToPhysDomP() {
    this._relationVnsRsAlDevToPhysDomP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsAlDevToPhysDomPInput() {
    return this._relationVnsRsAlDevToPhysDomP;
  }

  // service_type - computed: true, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // tenant_dn - computed: false, optional: false, required: true
  private _tenantDn?: string; 
  public get tenantDn() {
    return this.getStringAttribute('tenant_dn');
  }
  public set tenantDn(value: string) {
    this._tenantDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDnInput() {
    return this._tenantDn;
  }

  // trunking - computed: true, optional: true, required: false
  private _trunking?: string; 
  public get trunking() {
    return this.getStringAttribute('trunking');
  }
  public set trunking(value: string) {
    this._trunking = value;
  }
  public resetTrunking() {
    this._trunking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkingInput() {
    return this._trunking;
  }

  // relation_vns_rs_al_dev_to_dom_p - computed: false, optional: true, required: false
  private _relationVnsRsAlDevToDomP = new DataAciL4L7DeviceRelationVnsRsAlDevToDomPOutputReference(this, "relation_vns_rs_al_dev_to_dom_p");
  public get relationVnsRsAlDevToDomP() {
    return this._relationVnsRsAlDevToDomP;
  }
  public putRelationVnsRsAlDevToDomP(value: DataAciL4L7DeviceRelationVnsRsAlDevToDomP) {
    this._relationVnsRsAlDevToDomP.internalValue = value;
  }
  public resetRelationVnsRsAlDevToDomP() {
    this._relationVnsRsAlDevToDomP.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsAlDevToDomPInput() {
    return this._relationVnsRsAlDevToDomP.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.stringToTerraform(this._active),
      annotation: cdktf.stringToTerraform(this._annotation),
      context_aware: cdktf.stringToTerraform(this._contextAware),
      description: cdktf.stringToTerraform(this._description),
      device_type: cdktf.stringToTerraform(this._deviceType),
      function_type: cdktf.stringToTerraform(this._functionType),
      id: cdktf.stringToTerraform(this._id),
      is_copy: cdktf.stringToTerraform(this._isCopy),
      managed: cdktf.stringToTerraform(this._managed),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      promiscuous_mode: cdktf.stringToTerraform(this._promiscuousMode),
      relation_vns_rs_al_dev_to_phys_dom_p: cdktf.stringToTerraform(this._relationVnsRsAlDevToPhysDomP),
      service_type: cdktf.stringToTerraform(this._serviceType),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
      trunking: cdktf.stringToTerraform(this._trunking),
      relation_vns_rs_al_dev_to_dom_p: dataAciL4L7DeviceRelationVnsRsAlDevToDomPToTerraform(this._relationVnsRsAlDevToDomP.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.stringToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context_aware: {
        value: cdktf.stringToHclTerraform(this._contextAware),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_type: {
        value: cdktf.stringToHclTerraform(this._functionType),
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
      is_copy: {
        value: cdktf.stringToHclTerraform(this._isCopy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed: {
        value: cdktf.stringToHclTerraform(this._managed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      promiscuous_mode: {
        value: cdktf.stringToHclTerraform(this._promiscuousMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_al_dev_to_phys_dom_p: {
        value: cdktf.stringToHclTerraform(this._relationVnsRsAlDevToPhysDomP),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_dn: {
        value: cdktf.stringToHclTerraform(this._tenantDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunking: {
        value: cdktf.stringToHclTerraform(this._trunking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vns_rs_al_dev_to_dom_p: {
        value: dataAciL4L7DeviceRelationVnsRsAlDevToDomPToHclTerraform(this._relationVnsRsAlDevToDomP.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAciL4L7DeviceRelationVnsRsAlDevToDomPList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

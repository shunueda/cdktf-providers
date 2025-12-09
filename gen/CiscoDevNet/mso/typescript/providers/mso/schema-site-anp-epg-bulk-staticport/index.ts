// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_anp_epg_bulk_staticport
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaSiteAnpEpgBulkStaticportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_anp_epg_bulk_staticport#anp_name SchemaSiteAnpEpgBulkStaticport#anp_name}
  */
  readonly anpName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_anp_epg_bulk_staticport#epg_name SchemaSiteAnpEpgBulkStaticport#epg_name}
  */
  readonly epgName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_anp_epg_bulk_staticport#id SchemaSiteAnpEpgBulkStaticport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_anp_epg_bulk_staticport#schema_id SchemaSiteAnpEpgBulkStaticport#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_anp_epg_bulk_staticport#site_id SchemaSiteAnpEpgBulkStaticport#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_anp_epg_bulk_staticport#template_name SchemaSiteAnpEpgBulkStaticport#template_name}
  */
  readonly templateName: string;
  /**
  * static_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_anp_epg_bulk_staticport#static_ports SchemaSiteAnpEpgBulkStaticport#static_ports}
  */
  readonly staticPorts: SchemaSiteAnpEpgBulkStaticportStaticPorts[] | cdktf.IResolvable;
}
export interface SchemaSiteAnpEpgBulkStaticportStaticPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_anp_epg_bulk_staticport#deployment_immediacy SchemaSiteAnpEpgBulkStaticport#deployment_immediacy}
  */
  readonly deploymentImmediacy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_anp_epg_bulk_staticport#fex SchemaSiteAnpEpgBulkStaticport#fex}
  */
  readonly fex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_anp_epg_bulk_staticport#leaf SchemaSiteAnpEpgBulkStaticport#leaf}
  */
  readonly leaf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_anp_epg_bulk_staticport#micro_seg_vlan SchemaSiteAnpEpgBulkStaticport#micro_seg_vlan}
  */
  readonly microSegVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_anp_epg_bulk_staticport#mode SchemaSiteAnpEpgBulkStaticport#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_anp_epg_bulk_staticport#path SchemaSiteAnpEpgBulkStaticport#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_anp_epg_bulk_staticport#path_type SchemaSiteAnpEpgBulkStaticport#path_type}
  */
  readonly pathType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_anp_epg_bulk_staticport#pod SchemaSiteAnpEpgBulkStaticport#pod}
  */
  readonly pod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_anp_epg_bulk_staticport#vlan SchemaSiteAnpEpgBulkStaticport#vlan}
  */
  readonly vlan: number;
}

export function schemaSiteAnpEpgBulkStaticportStaticPortsToTerraform(struct?: SchemaSiteAnpEpgBulkStaticportStaticPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_immediacy: cdktf.stringToTerraform(struct!.deploymentImmediacy),
    fex: cdktf.stringToTerraform(struct!.fex),
    leaf: cdktf.stringToTerraform(struct!.leaf),
    micro_seg_vlan: cdktf.numberToTerraform(struct!.microSegVlan),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    path_type: cdktf.stringToTerraform(struct!.pathType),
    pod: cdktf.stringToTerraform(struct!.pod),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function schemaSiteAnpEpgBulkStaticportStaticPortsToHclTerraform(struct?: SchemaSiteAnpEpgBulkStaticportStaticPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_immediacy: {
      value: cdktf.stringToHclTerraform(struct!.deploymentImmediacy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fex: {
      value: cdktf.stringToHclTerraform(struct!.fex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    leaf: {
      value: cdktf.stringToHclTerraform(struct!.leaf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    micro_seg_vlan: {
      value: cdktf.numberToHclTerraform(struct!.microSegVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_type: {
      value: cdktf.stringToHclTerraform(struct!.pathType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod: {
      value: cdktf.stringToHclTerraform(struct!.pod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaSiteAnpEpgBulkStaticportStaticPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchemaSiteAnpEpgBulkStaticportStaticPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentImmediacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentImmediacy = this._deploymentImmediacy;
    }
    if (this._fex !== undefined) {
      hasAnyValues = true;
      internalValueResult.fex = this._fex;
    }
    if (this._leaf !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaf = this._leaf;
    }
    if (this._microSegVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.microSegVlan = this._microSegVlan;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._pathType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathType = this._pathType;
    }
    if (this._pod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaSiteAnpEpgBulkStaticportStaticPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentImmediacy = undefined;
      this._fex = undefined;
      this._leaf = undefined;
      this._microSegVlan = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._pathType = undefined;
      this._pod = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentImmediacy = value.deploymentImmediacy;
      this._fex = value.fex;
      this._leaf = value.leaf;
      this._microSegVlan = value.microSegVlan;
      this._mode = value.mode;
      this._path = value.path;
      this._pathType = value.pathType;
      this._pod = value.pod;
      this._vlan = value.vlan;
    }
  }

  // deployment_immediacy - computed: false, optional: true, required: false
  private _deploymentImmediacy?: string; 
  public get deploymentImmediacy() {
    return this.getStringAttribute('deployment_immediacy');
  }
  public set deploymentImmediacy(value: string) {
    this._deploymentImmediacy = value;
  }
  public resetDeploymentImmediacy() {
    this._deploymentImmediacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentImmediacyInput() {
    return this._deploymentImmediacy;
  }

  // fex - computed: false, optional: true, required: false
  private _fex?: string; 
  public get fex() {
    return this.getStringAttribute('fex');
  }
  public set fex(value: string) {
    this._fex = value;
  }
  public resetFex() {
    this._fex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fexInput() {
    return this._fex;
  }

  // leaf - computed: false, optional: true, required: false
  private _leaf?: string; 
  public get leaf() {
    return this.getStringAttribute('leaf');
  }
  public set leaf(value: string) {
    this._leaf = value;
  }
  public resetLeaf() {
    this._leaf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafInput() {
    return this._leaf;
  }

  // micro_seg_vlan - computed: false, optional: true, required: false
  private _microSegVlan?: number; 
  public get microSegVlan() {
    return this.getNumberAttribute('micro_seg_vlan');
  }
  public set microSegVlan(value: number) {
    this._microSegVlan = value;
  }
  public resetMicroSegVlan() {
    this._microSegVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microSegVlanInput() {
    return this._microSegVlan;
  }

  // mode - computed: false, optional: true, required: false
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // path_type - computed: false, optional: true, required: false
  private _pathType?: string; 
  public get pathType() {
    return this.getStringAttribute('path_type');
  }
  public set pathType(value: string) {
    this._pathType = value;
  }
  public resetPathType() {
    this._pathType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTypeInput() {
    return this._pathType;
  }

  // pod - computed: false, optional: false, required: true
  private _pod?: string; 
  public get pod() {
    return this.getStringAttribute('pod');
  }
  public set pod(value: string) {
    this._pod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod;
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class SchemaSiteAnpEpgBulkStaticportStaticPortsList extends cdktf.ComplexList {
  public internalValue? : SchemaSiteAnpEpgBulkStaticportStaticPorts[] | cdktf.IResolvable

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
  public get(index: number): SchemaSiteAnpEpgBulkStaticportStaticPortsOutputReference {
    return new SchemaSiteAnpEpgBulkStaticportStaticPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_anp_epg_bulk_staticport mso_schema_site_anp_epg_bulk_staticport}
*/
export class SchemaSiteAnpEpgBulkStaticport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_site_anp_epg_bulk_staticport";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaSiteAnpEpgBulkStaticport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaSiteAnpEpgBulkStaticport to import
  * @param importFromId The id of the existing SchemaSiteAnpEpgBulkStaticport that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_anp_epg_bulk_staticport#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaSiteAnpEpgBulkStaticport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_site_anp_epg_bulk_staticport", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_site_anp_epg_bulk_staticport mso_schema_site_anp_epg_bulk_staticport} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaSiteAnpEpgBulkStaticportConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaSiteAnpEpgBulkStaticportConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_site_anp_epg_bulk_staticport',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anpName = config.anpName;
    this._epgName = config.epgName;
    this._id = config.id;
    this._schemaId = config.schemaId;
    this._siteId = config.siteId;
    this._templateName = config.templateName;
    this._staticPorts.internalValue = config.staticPorts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anp_name - computed: false, optional: false, required: true
  private _anpName?: string; 
  public get anpName() {
    return this.getStringAttribute('anp_name');
  }
  public set anpName(value: string) {
    this._anpName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anpNameInput() {
    return this._anpName;
  }

  // epg_name - computed: false, optional: false, required: true
  private _epgName?: string; 
  public get epgName() {
    return this.getStringAttribute('epg_name');
  }
  public set epgName(value: string) {
    this._epgName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get epgNameInput() {
    return this._epgName;
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

  // schema_id - computed: false, optional: false, required: true
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // static_ports - computed: false, optional: false, required: true
  private _staticPorts = new SchemaSiteAnpEpgBulkStaticportStaticPortsList(this, "static_ports", false);
  public get staticPorts() {
    return this._staticPorts;
  }
  public putStaticPorts(value: SchemaSiteAnpEpgBulkStaticportStaticPorts[] | cdktf.IResolvable) {
    this._staticPorts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticPortsInput() {
    return this._staticPorts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anp_name: cdktf.stringToTerraform(this._anpName),
      epg_name: cdktf.stringToTerraform(this._epgName),
      id: cdktf.stringToTerraform(this._id),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      site_id: cdktf.stringToTerraform(this._siteId),
      template_name: cdktf.stringToTerraform(this._templateName),
      static_ports: cdktf.listMapper(schemaSiteAnpEpgBulkStaticportStaticPortsToTerraform, true)(this._staticPorts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anp_name: {
        value: cdktf.stringToHclTerraform(this._anpName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      epg_name: {
        value: cdktf.stringToHclTerraform(this._epgName),
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
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_ports: {
        value: cdktf.listMapperHcl(schemaSiteAnpEpgBulkStaticportStaticPortsToHclTerraform, true)(this._staticPorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SchemaSiteAnpEpgBulkStaticportStaticPortsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

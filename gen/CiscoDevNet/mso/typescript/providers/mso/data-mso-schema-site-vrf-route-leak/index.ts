// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_route_leak
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsoSchemaSiteVrfRouteLeakConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_route_leak#id DataMsoSchemaSiteVrfRouteLeak#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_route_leak#schema_id DataMsoSchemaSiteVrfRouteLeak#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_route_leak#site_id DataMsoSchemaSiteVrfRouteLeak#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_route_leak#target_vrf_name DataMsoSchemaSiteVrfRouteLeak#target_vrf_name}
  */
  readonly targetVrfName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_route_leak#target_vrf_schema_id DataMsoSchemaSiteVrfRouteLeak#target_vrf_schema_id}
  */
  readonly targetVrfSchemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_route_leak#target_vrf_template_name DataMsoSchemaSiteVrfRouteLeak#target_vrf_template_name}
  */
  readonly targetVrfTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_route_leak#template_name DataMsoSchemaSiteVrfRouteLeak#template_name}
  */
  readonly templateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_route_leak#vrf_name DataMsoSchemaSiteVrfRouteLeak#vrf_name}
  */
  readonly vrfName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_route_leak mso_schema_site_vrf_route_leak}
*/
export class DataMsoSchemaSiteVrfRouteLeak extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_site_vrf_route_leak";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsoSchemaSiteVrfRouteLeak resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsoSchemaSiteVrfRouteLeak to import
  * @param importFromId The id of the existing DataMsoSchemaSiteVrfRouteLeak that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_route_leak#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsoSchemaSiteVrfRouteLeak to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_site_vrf_route_leak", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_route_leak mso_schema_site_vrf_route_leak} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsoSchemaSiteVrfRouteLeakConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsoSchemaSiteVrfRouteLeakConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_site_vrf_route_leak',
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
    this._id = config.id;
    this._schemaId = config.schemaId;
    this._siteId = config.siteId;
    this._targetVrfName = config.targetVrfName;
    this._targetVrfSchemaId = config.targetVrfSchemaId;
    this._targetVrfTemplateName = config.targetVrfTemplateName;
    this._templateName = config.templateName;
    this._vrfName = config.vrfName;
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

  // subnet_ips - computed: true, optional: false, required: false
  public get subnetIps() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ips'));
  }

  // target_vrf_name - computed: false, optional: false, required: true
  private _targetVrfName?: string; 
  public get targetVrfName() {
    return this.getStringAttribute('target_vrf_name');
  }
  public set targetVrfName(value: string) {
    this._targetVrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVrfNameInput() {
    return this._targetVrfName;
  }

  // target_vrf_schema_id - computed: true, optional: true, required: false
  private _targetVrfSchemaId?: string; 
  public get targetVrfSchemaId() {
    return this.getStringAttribute('target_vrf_schema_id');
  }
  public set targetVrfSchemaId(value: string) {
    this._targetVrfSchemaId = value;
  }
  public resetTargetVrfSchemaId() {
    this._targetVrfSchemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVrfSchemaIdInput() {
    return this._targetVrfSchemaId;
  }

  // target_vrf_template_name - computed: true, optional: true, required: false
  private _targetVrfTemplateName?: string; 
  public get targetVrfTemplateName() {
    return this.getStringAttribute('target_vrf_template_name');
  }
  public set targetVrfTemplateName(value: string) {
    this._targetVrfTemplateName = value;
  }
  public resetTargetVrfTemplateName() {
    this._targetVrfTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVrfTemplateNameInput() {
    return this._targetVrfTemplateName;
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

  // tenant_name - computed: true, optional: false, required: false
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      site_id: cdktf.stringToTerraform(this._siteId),
      target_vrf_name: cdktf.stringToTerraform(this._targetVrfName),
      target_vrf_schema_id: cdktf.stringToTerraform(this._targetVrfSchemaId),
      target_vrf_template_name: cdktf.stringToTerraform(this._targetVrfTemplateName),
      template_name: cdktf.stringToTerraform(this._templateName),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
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
      target_vrf_name: {
        value: cdktf.stringToHclTerraform(this._targetVrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_vrf_schema_id: {
        value: cdktf.stringToHclTerraform(this._targetVrfSchemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_vrf_template_name: {
        value: cdktf.stringToHclTerraform(this._targetVrfTemplateName),
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
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
